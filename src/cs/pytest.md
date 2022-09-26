# pytest 基础

## 常用命令行选项

* `--collect-only`：展示在给定的配置下哪些测试用例会被运行
* `-k`：使用表达式指定要运行的测试用例，表达式可以匹配测试名，且表达式中可以包含 `and`,`or`,`not` 关键字

    ```text
    ➤ pytest -v --collect-only -k "replace or asdict"

    <Package tests>
      <Module test_named_tuple.py>
        <Function test_asdict>
          _asdict() should return a dictionary.
        <Function test_replace>
          replace() should change passed in fields.
    ```

* `-m`：标记测试并分组，以便快速选中并运行，可以同时指定多个标记，标记之间可以使用 `and`,`or`,`not` 关键字
* `-s`：允许终端在测试运行时输出某些结果，包括任何符合标准的输出流信息，等价于 `--capture=no`
* `--markers`：列出所有可用的 marker
* `--fixtures`：列出所有可用的 fixture
* `--setup-show`：显示测试用例的 setup 和 teardown 过程
* `--durations=0`：将所有阶段的耗时从长到短排序
* `-l`：显示失败的测试用例的局部变量
* `-x`：遇到失败的测试用例时停止运行
* `--lf, --last-failed`：只运行上次失败的测试用例，如果没有失败的测试用例，则运行所有测试用例
* `--ff, --failed-first`：先运行上次失败的测试用例，然后再运行其他测试用例
* `--cache-show`：显示缓存的内容（可用于多个测试会话之间共享）
* `--cache-clear`：清除缓存
* `--pdb`：遇到失败的测试用例时进入调试模式
* `--tb=[auto/long/short/line/native/no]`：指定发生错误时堆栈回溯信息的粒度
* `--junit-xml`：将测试结果输出为 junit 格式的 xml 文件

## 测试搜索

pytest 能自动搜索所有待执行的测试用例，你需要遵守以下几条命名规则：

* 测试文件应该命名为 `test_*.py` 或者 `*_test.py`
* 测试函数、测试类方法应当命名为 `test_<something>`
* 测试类要命名为 `Test<Something>`
* 默认的测试搜索规则可以在 `pytest.ini` 中进行修改

## 编写测试函数

* pytest 会截断对原生 `assert` 的调用，替换为 pytest 定义的 `assert`
* 使用 `with pytest.raises(Exception):` 来断言异常

  ```python
  def test_start_tasks_db_raises():
    """Make sure unsupported db raises an exception."""
    with pytest.raises(ValueError) as exc_info:
        tasks.start_tasks_db("some/great/path", "mysql")
    exception_msg = exc_info.value.args[0]
    assert exc_info.type == ValueError
    assert exception_msg == "db_type must be a 'tiny' or 'mongo'"
  ```

* 使用 `pytest.approx` 来断言浮点数

  ```python
  def test_approx():
    """Using pytest.approx."""
    v1 = 0.1 + 0.2
    v2 = 0.3
    assert v1 != v2
    assert v1 == pytest.approx(v2)
  ```

* 使用 `@pytest.mark.skip` 和 `@pytest.mark.skipif` 装时期来跳过不希望运行的测试
* 使用 `@pytest.mark.xfail` 装饰器来标记预期失败的测试

  ```python
  @pytest.mark.xfail(
      sys.platform == "win32",
      reason="can't run on Windows"
  )
  def test_unique_id_is_a_duck():
      """Demonstrate xfail"""
      uid = tasks.unique_id()
      assert uid == "a duck"
  ```

* 使用 `@pytest.mark.parametrize(argnames, argvalues)` 装饰器来运行相同测试用例的不同参数组合, `parametrize()` 的第一个参数是**用逗号分隔的字符串列表**，第二个参数是**值列表**

  ```python
  @pytest.mark.parametrize(
      "summary, owner, done",
      [
          ("sleep", None, False),
          ("wake", "brian", False),
          ("breath", "iris", True),
          ("eat", "bob", True),
      ],
  )
  def test_add_variety(summary, owner, done):
      """Demonstrate parameterize with 3 parameters."""
      new_task = Task(summary, owner, done)
      task_id = tasks.add(new_task)
      task_from_db = tasks.get(task_id)
      assert equivalent(new_task, task_from_db)
  ```

* `parametrize()` 还可以通过 `ids` 参数来指定每个参数组合的名字, `ids` 参数的值是一个字符串列表，长度必须和 `argvalues` 参数的长度一致

  ```python
  tasks_to_try = (
    Task("sleep", None, True),
    Task("wake", "brian", False),
    Task("breathe", "bob", True),
    Task("exercise", "iris", False),
  )
  task_ids = [f"Task({t.summary},{t.owner},{t.done})" for t in tasks_to_try]


  @pytest.mark.parametrize("task", tasks_to_try, ids=task_ids)
  def test_add_variety(task):
      """Demonstrate parameterize with 3 parameters."""
      task_id = tasks.add(task)
      task_from_db = tasks.get(task_id)
      assert equivalent(task, task_from_db)
  ```

* 当 `ids` 不能被参数化批量生成时，需要自定义的时候，可以给每个参数值定义一个 `id` 来做标识: `pytest.param(<value>, id="something")`

  ```python
  @pytest.mark.parametrize(
      "task",
      [
          pytest.param(Task("sleep")),
          pytest.param(Task("wake", "brian"), id="summary/owner"),
          pytest.param(Task("breathe", "BRIAN", True), id="summary/owner/done"),
      ],
  )
  def test_add_variety(task):
      """Demonstrate parameterize with 3 parameters."""
      task_id = tasks.add(task)
      task_from_db = tasks.get(task_id)
      assert equivalent(task, task_from_db)
  ```

  运行结果:

  ```bash
  test_add.py::test_add_variety[task0] PASSED # 因为没有添加id标识，所以可读性不好
  test_add.py::test_add_variety[summary/owner] PASSED
  test_add.py::test_add_variety[summary/owner/done] PASSED
  ```

## Fixture

* Fixture 是一种特殊的函数，在测试函数运行前后，由 pytest 执行的外壳函数，通常用来做一些准备工作，比如创建数据库连接，创建临时文件等。

  ```python
  @pytest.fixture()
  def some_data():
      return 42


  def test_some_data(some_data):
      assert some_data == 42
  ```

* 多个 fixture 之间可以相互依赖，比如一个 fixture 依赖另一个 fixture，这时可以在 fixture 函数的参数列表中添加依赖的 fixture 函数

  ```python
  @pytest.fixture()
  def db_with_3_tasks(tasks_db, tasks_just_a_few):
      """Connected db with 3 tasks, all unique"""
      for t in tasks_just_a_few:
          tasks.add(t)

  def test_add_increases_count(db_with_3_tasks):
    tasks.add(Task("throw a party"))
    assert tasks.count() == 4
  ```

* 使用 `usefixtures` 为测试类指定 fixture，这种方法**不能**够使用 fixture 函数的返回值

  ```python
  @pytest.mark.usefixtures("tasks_db")
  class TestAdd:
      """Using a fixture for setup and teardown."""

      def test_add_increases_count(self):
          """tasks.add() affect tasks.count()."""
          tasks.add(Task("throw a party"))
          assert tasks.count() == 1
  ```

* 通过 `scope` 参数指定 fixture 的作用范围（也可以理解为控制 fixture 执行 setup 和 teardown 的频率），`scope` 参数的值可以是 `function`、`class`、`module`、`session`，默认值是 `function`。fixture 只能使用同级别的 fixture 或者比自己级别更高的 fixture。

  ```python
  @pytest.fixture(scope="session")
  def tasks_db(tmpdir_factory):
      """Connect to db before testing, disconnect after."""
      tmp_dir = tmpdir_factory.mktemp("temp")
      tasks.start_tasks_db(str(tmp_dir), "tiny")
      yield
      tasks.stop_tasks_db()
  ```

* 可以为常用 fixture 添加 `autouse=True` 选项，使得作用域内的测试函数自动运行该 fixture
* 可以设置 `name` 参数来重命名 fixture
* 对测试函数进行参数化，可以多次运行的只是该测试函数。而使用**参数化** fixture,每个使用该 fixture 的测试函数都可以被运行多次

  ```python
  tasks_to_try = [
      pytest.param(Task("sleep")),
      pytest.param(Task("wake", "brian")),
      pytest.param(Task("breathe", "BRIAN", True)),
  ]


  def id_func(task: Task):
      """Create a string representation for test report."""
      return f"({task.summary},{task.owner},{task.done})"


  @pytest.fixture(params=tasks_to_try, ids=id_func)
  def a_task(request):
      """Using a fixture to pass data to a test."""
      return request.param


  def test_add_variety(a_task):
      """Demonstrate parameterize with 3 parameters."""
      task_id = tasks.add(a_task)
      task_from_db = tasks.get(task_id)
      assert equivalent(a_task, task_from_db)
  ```

  `ids` 参数可以指定为一个函数，供 pytest 针对每个参数生成标识

### 内置 Fixture

#### tmpdir 和 tmpdir_factory

```python
def test_tmpdir(tmpdir):
    print(tmpdir.realpath)
    # tmpdir already has a path name associated with it
    # join() extends the path to include a filename
    # the file is created when it's written to
    # tmpdir is a py.path.local object
    a_file = tmpdir.join("something.txt")

    # you can create directories
    a_sub_dir = tmpdir.mkdir("anything")

    # you can create files in the directory (created when written)
    another_file = a_sub_dir.join("something_else.txt")

    # this write creates "something.txt"
    a_file.write("contents may settle during shipping")

    # this write creates "anything/something_else.txt"
    another_file.write("something different")

    assert a_file.read() == "contents may settle during shipping"
    assert another_file.read() == "something different"
```

```python
def test_tmpdir_factor(tmpdir_factory):
    print(tmpdir_factory.getbasetemp())

    # you should start with making a directory
    # a_dir acts like the object returned from the tmpdir fixture
    a_dir = tmpdir_factory.mktemp("mydir")
    a_file = a_dir.join("something.txt")

    # you can create directories
    a_sub_dir = a_dir.mkdir("anything")

    # you can create files in the directory (created when written)
    another_file = a_sub_dir.join("something_else.txt")

    # this write creates "something.txt"
    a_file.write("contents may settle during shipping")

    # this write creates "anything/something_else.txt"
    another_file.write("something different")

    assert a_file.read() == "contents may settle during shipping"
    assert another_file.read() == "something different"
```

`tmpdir_factory` 的作用范围是会话级别，`tmpdir` 的作用范围是函数级别。如果需要模块或者类级别作用范围的目录，可以利用 `tmpdir_factory` 再创建一个 fixture。

```python
@pytest.fixture(scope="module")
def my_tmpdir(tmpdir_factory):
    pass
```

#### pytestconfig

`pytestconfig` 是 `request.config` 的快捷方式，可以通过 `pytestconfig.getoption()` 获取命令行选项。

```python
def test_option(pytestconfig):
    print(f"args: {pytestconfig.args}")
    print(f"invocation_dir: {pytestconfig.invocation_dir}")
    print(f"rootdir: {pytestconfig.rootdir}")
    print(f"inifile: {pytestconfig.inifile}")
    print(f"basetemp: {pytestconfig.getoption('basetemp')}")
    print(f"-k EXPRESSION: {pytestconfig.getoption('keyword')}")
    print(f"-v, --verbose: {pytestconfig.getoption('verbose')}")
    print(f"--tb style: {pytestconfig.getoption('tbstyle')}")
```

也可以基于 `pytestconfig` 创建新的 fixture

```python
@pytest.fixture()
def foo(pytestconfig):
    return pytestconfig.option.foo


def test_option(foo):
    print("foo: {}".format(foo))
```

#### cache

cache 的作用是存储一段测试会话的信息，在下一段测试会话中使用。`cache`的接口主要有两个：`cache.get(key, default)` 和 `cache.set(key, value)`。

习惯上，键名以应用名字或插件名字开始，接着是`/`，然后是分隔开的键字符串。键值可以是任何可以转换成 JSON 的对象。

```python
Duration = namedtuple("Duration", ["current", "last"])


@pytest.fixture(scope="session")
def duration_cache(request):
    key = "duration/test_durations"
    d = Duration({}, request.config.cache.get(key, {}))
    yield d
    request.config.cache.set(key, d.current)


@pytest.fixture(autouse=True)
def check_duration(request, duration_cache):
    d = duration_cache
    nodeid = request.node.nodeid  # nodeid is a unique identifier for the test
    start_time = datetime.datetime.now()
    yield
    duration = (datetime.datetime.now() - start_time).total_seconds()
    d.current[nodeid] = duration
    if d.last.get(nodeid, None) is not None:
        errorstring = "test duration over 2x last duration"
        assert duration <= (d.last[nodeid] * 2), errorstring


@pytest.mark.parametrize("i", range(5))
def test_slow_stuff(i):
    time.sleep(random.random())
```

```text
➤ pytest --cache-show
================ test session starts ================
platform linux -- Python 3.10.7, pytest-7.1.2, pluggy-1.0.0
rootdir: /home/morris/tasks/tests
cachedir: /home/morris/tasks/tests/.pytest_cache
---------------- cache values for '*' ----------------
duration/test_durations contains:
  {'test_cache.py::test_slow_stuff[0]': 0.133439,
   'test_cache.py::test_slow_stuff[1]': 0.569769,
   'test_cache.py::test_slow_stuff[2]': 0.7625,
   'test_cache.py::test_slow_stuff[3]': 0.930151,
   'test_cache.py::test_slow_stuff[4]': 0.748842}
```

同时也能看到被 `cache` 的数据保存在 `.pytest_cache` 目录下。

#### capsys

* `capsys.readouterr()`：返回一个包含 `out` 和 `err` 的 `namedtuple`，分别是标准输出和标准错误的内容

  ```python
  def test_capsys(capsys):
      print("hello")
      print("world", file=sys.stderr)
      out, err = capsys.readouterr()
      assert out == "hello\n"
      assert err == "world\n"
  ```

* 临时让输出绕过默认的输出捕获机制，可以使用 `capsys.disabled()` 上下文管理器

  ```python
  def test_capsys_disabled(capsys):
      with capsys.disabled():
          print("always print this")
      print("normal print, usually captured")
  ```

#### monkeypatch

monkeypatch 可以在运行期间对类或模块进行同态修改，比如修改环境变量、修改类属性、修改模块属性等。

* setattr(target, name, value, raising=True)：修改对象的属性值

  ```python
  def test_setattr(monkeypatch):
      class A:
          a = 1

      monkeypatch.setattr(A, "a", 2)
      assert A.a == 2
  ```

* delattr(target, name, raising=True)：删除对象的属性

  ```python
  def test_delattr(monkeypatch):
      class A:
          a = 1

      monkeypatch.delattr(A, "a")
      assert not hasattr(A, "a")
  ```

* setitem(mapping, name, value)：修改字典的值

  ```python
  def test_setitem(monkeypatch):
      d = {"a": 1}
      monkeypatch.setitem(d, "a", 2)
      assert d["a"] == 2
  ```

* delitem(obj, name, raising=True)：删除字典的值

  ```python
  def test_delitem(monkeypatch):
      d = {"a": 1}
      monkeypatch.delitem(d, "a")
      assert "a" not in d
  ```

* setenv(name, value, prepend=False)：修改环境变量

  ```python
  def test_setenv(monkeypatch):
      monkeypatch.setenv("foo", "bar")
      assert os.environ["foo"] == "bar"
  ```

* delenv(name, raising=True)：删除环境变量

  ```python
  def test_delenv(monkeypatch):
      monkeypatch.setenv("foo", "bar")
      monkeypatch.delenv("foo")
      assert "foo" not in os.environ
  ```

* syspath_prepend(path)：在 `sys.path` 的开头添加路径，`sys.path` 是 Python 模块的搜索路径

  ```python
  def test_syspath_prepend(monkeypatch):
      monkeypatch.syspath_prepend("/foo")
      assert sys.path[0] == "/foo"
  ```

* chdir(path)：修改当前工作目录

  ```python
  def test_chdir(monkeypatch):
      monkeypatch.chdir("/tmp")
      assert os.getcwd() == "/tmp"
  ```

#### recwarn

recwarn 用来检查待测代码产生的警告信息。

```python
def test_recwarn(recwarn):
    warnings.warn("Please stop using this function", DeprecationWarning)
    assert len(recwarn) == 1
    w = recwarn.pop()
    assert w.category == DeprecationWarning
    assert str(w.message) == "Please stop using this function"
```

pytest 还可以使用 `pytest.warns` 来检查警告信息。

```python
def lame_function():
    warnings.warn("Please stop using this", DeprecationWarning)


def test_lame_function():
    with pytest.warns(DeprecationWarning) as warning_list:
        lame_function()

    assert len(warning_list) == 1
    w = warning_list.pop()
    assert w.category == DeprecationWarning
    assert str(w.message) == "Please stop using this"
```

## 插件

### 寻找插件

* <https://docs.pytest.org/en/latest/reference/plugin_list.html#plugin-list>

### 编写插件

* 使用 `pytest_addoption` 可以给 pytest 添加额外的命令行选项

  ```python
  def pytest_addoption(parser):
      parser.addoption(
          "--myopt",
          action="store_true",
          help="some boolean option",
      )
      parser.addoption(
          "--foo",
          action="store",
          default="bar",
          help="foo: bar or baz",
      )
  ```

  或者不通过命令行参数，使用 `pytest.ini` 文件做自定义的配置

  ```python
  def pytest_addoption(parser):
      parser.addini(
          "myopt",
          type="bool",
          default=False,
          help="some boolean option",
      )
      parser.addini(
          "foo",
          type="string",
          default="bar",
          help="foo: bar or baz",
  ```

* 使用 `pytest_report_header` 可以在测试报告的 header 中添加额外的信息

  ```python
  def pytest_report_header(config):
      return "🍎🍎🍎🍎🍎🍎🍎🍎🍎"
  ```

* 使用 `pytest_report_teststatus` 可以修改测试报告中的测试状态

  ```python
  def pytest_report_teststatus(report):
      if report.when == "call" and report.failed:
          return report.outcome, "💥", "💥"
  ```

### 测试插件

* 开启 `pytester` 插件，在 conftest.py 中添加 `pytest_plugins = ["pytester"]`
* 使用 `pytester` 来测试插件

  ```python
  @pytest.fixture()
  def sample_test(testdir):
      testdir.makepyfile(
          """
          def test_sample():
              assert True
          """
      )
      return testdir


  def test_verbose(sample_test):
      result = sample_test.runpytest("-v")
      result.stdout.fnmatch_lines(["*::test_sample PASSED*"])
      result.assert_outcomes(passed=1)
  ```

  `testdir` 自动创建了一个临时目录用来存放测试文件

### 常用插件

#### pytest-cov

报告测试覆盖率

* 安装：`pip install pytest-cov`
* 使用：`pytest --cov=src --cov-report=html tests`

#### pytest-mock

替换系统的某个部分以隔离要测试的代码

* 安装：`pip install pytest-mock`
* 使用

  ```python
  def test_mock(mocker):
      mocker.patch("os.path.exists", return_value=True)
      assert os.path.exists("/tmp")
  ```

#### pytest-xdist

通常，测试都是依次执行的，因为有些资源一次只能被一个测试用例访问。如果你的测试不需要访问共享资源，可以通过并行运行来提速

* 安装：`pip install pytest-xdist`
* 使用：`pytest -n auto`

#### pytest-benchmark

测试代码的性能

* 安装：`pip install pytest-benchmark`
* 使用

  ```python
  def test_benchmark(benchmark):
      benchmark.pedantic(lambda: 1 + 1, iterations=100, rounds=100)
  ```

#### pytest-repeat

重复运行测试

* 安装：`pip install pytest-repeat`
* 使用：`pytest --count=3`

#### pytest-rerunfailures

失败的测试重跑

* 安装：`pip install pytest-rerunfailures`
* 使用：`pytest --reruns=3`

#### pytest-timeout

设置测试的超时时间（正常情况下，pytest 里的测试是没有时间限制的）

* 安装：`pip install pytest-timeout`
* 使用：`pytest --timeout=10`
* 或者在代码中使用 `@pytest.mark.timeout(10)` 来设置单个测试的超时时间

#### pytest-instafail

测试失败时立即输出堆栈回溯信息，而不是等到所有测试都执行完毕

* 安装：`pip install pytest-instafail`
* 使用：`pytest --instafail`

#### pytest-sugar

显示彩色和进度条

* 安装：`pip install pytest-sugar`
* 使用：`pytest --sugar`

#### pytest-emoji

显示 emoji

* 安装：`pip install pytest-emoji`
* 使用：`pytest --emoji`

#### pytest-html

生成 html 报告

* 安装：`pip install pytest-html`
* 使用：`pytest --html=report.html`

#### pytest-flake8

检查代码风格

* 安装：`pip install pytest-flake8`
* 使用：`pytest --flake8`

#### pytest-selenium

借助浏览器完成自动化测试

* 安装：`pip install pytest-selenium`
* 使用

  ```python
  def test_selenium(selenium):
      selenium.get("https://www.baidu.com")
      selenium.find_element_by_id("kw").send_keys("pytest")
      selenium.find_element_by_id("su").click()
      assert "pytest" in selenium.title
  ```

## 配置

### pytest.ini

它是 pytest 的主配置文件，可以在项目根目录下创建该文件，也可以在 `~/.config/pytest.ini` 中创建全局配置文件

#### 修改默认命令行选项

```ini
[pytest]
addopts = -s --tb=short --strict-markers
```

#### 注册标记

```ini
[pytest]
markers =
    smoke: smoke test
    regression: regression test
```

#### 忽略那些不需要递归搜索的目录

```ini
[pytest]
norecursedirs = .* venv *.egg dist build
```

#### 指定测试目录

```ini
[pytest]
testpaths = tests
```

#### 更改测试搜索的规则

```ini
[pytest]
python_files = test_*.py *_test.py pytest_*.py check_*.py
python_classes = Tests* *Test *Suite
python_functions = test_* check_*
```

#### 禁用 xpass

那些被标记为 `@pytest.mark.xfail` 但实际通过的测试用例也被报告为失败

```ini
[pytest]
xfail_strict = true
```

### conftest.py

它是本地插件库，其中的 hook 函数和 fixture 将作用于该文件所在的目录以及所有子目录
