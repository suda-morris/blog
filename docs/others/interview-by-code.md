title: Interview By Code
tags:
  - C
categories:
  - Job Hunting
author: suda-morris
date: 2017-07-01 20:02:00
---

# C语言面试

> 栈S中已存放若干大于0的整数元素，试编写将S中元素进行排序的算法，使得S中元素自栈顶至栈底由小到大排序。要求算法`不借助任一辅助数据结构`
```cpp
/*递归法*/
void SortStack(Stack* S){
	int n,m;
	if(IsEmpty(S)){
		return;
	}
	m = Pop(S);
	if(IsEmpty(S)){
		Push(S,m);
		return;
	}else{
		SortStack(S);
		n = Pop(S);
		if(n<m){
			//n是最小的,m压栈后需要重新排序
			Push(S,m);
			SortStack(S);
			Push(S,n);
		}else{
			//m是最小的，n第二小
			Push(S,n);
			Push(S,m);
		}
	}
}
```

----------

> 输入两个整数序列，第一个序列是栈的入栈序列，且递增有序。请判断第二个序列是否为合理的出栈序列
```cpp
/*出栈序列A中的任一元素，若它的右边所有比它小的元素是从左向右递减的，则A就是一个可能的出栈序列*/
int isValid(int A[],int n){
	int i,j,k;
	for(i=0;i<n;i++){
		/*遍历数组中的每个数*/
		k = A[i];
		for(j=i+1;j<n;j++){
			if(A[j] < A[i]){
				/*查看比A[i]小的数是否递减*/
				if(A[j] < k){
					k = A[j];
				}else{
					return 0;
				}
			}
		}
	}
}
```

----------

> 输入两个整数序列，第一个序列是栈的入栈序列，请判断第二个序列是否为该栈的出栈序列
```cpp
	int matchOK(int A[], int n, int B[], int m){
		int i,j;
		Stack s = new Stack;
		j = 0;
		for(i=0;i<n;i++){
			if(A[i] != B[j]){
				s.push(A[i]);
			}else{
				j++;
			}
		}
		while(!s.isEmpty()){
			if(s.getTop() != B[j]){
				return 0;
			}else{
				j++;
				s.pop();
			}
		}
		if(j != m){
			return 0;
		}else{
			return 1;
		}
	}
```

----------

> 一个$m \times n$的Young氏矩阵时一个$m \times n$的矩阵，其中每一行的数据都从左到右排序，每一列的数据都从上到下排序。设有Young氏矩阵Y保存了$m \times n$个整数，请实现函数，查找给定元素target是否保存在Y中，若查找成功，算法返回1，否则返回0
```cpp
int findElement(int n,int m, int A[][m],int target){
	//n行m列,起始位置取右上角
	int i=0,j=m-1;
	//二分查找
	while(i>=0 && i<n && j>=0 && j<m){
		//往左走
		if(A[i][j] > target){
			j--;
		}else if(A[i][j] < target){
			//往下走
			i++;
		}else{
			return 1;
		}
	}
	return 0;
}
```

----------

> 往Young氏矩阵中插入新的元素，要求保证矩阵的行、列有序性
```cpp
int insertElement(int n,int m, int A[][m],int target){
	/*先将插入元素target放在矩阵的右下角，选出上侧位置及左侧位置中的较大者K。若K<target，则插入结束；若K>target，则交换K与target，继续进行这个过程，直到找到合适的位置为止*/
	int flag = 1;
	int i=n-1,j=m-1;//n行，m列，右上角
	while(flag){
		//未到边界
		if(i>=0 && j>=0){
			//左侧大
			if(A[i-1][j] < A[i][j-1]){
				if(target < A[i][j-1]){
					//往左走
					A[i][j] = A[i][j-1];
					j--;
				}else{
					flag = 0;
				}
			}
			//上侧大
			else{
				if(target < A[i-1][j]){
					//往上走
					A[i][j] = A[i-1][j];
					i--;
				}else{
					flag = 0;
				}
			}
		}
		//触及左边界，只能往上走
		else if(i>=0){
			if(target < A[i-1][j]){
				A[i][j] = A[i-1][j];
				i--;
			}else{
				flag = 0;
			}
		}
		//触及上边界，只能往左走
		else{
			if(target < A[i][j-1]){
				A[i][j] = A[i][j-1];
				j--;
			}else{
				flag = 0;
			}
		}
	}
	A[i][j] = target;
	return 1;
}
```

----------

> 输入两棵二叉树A和B，判断B是否是A的子结构（子结构包括树形以及节点中的值均一致）
```cpp
typedef struct TNode{
	int element;
	struct TNode* left;
	struct TNode* right;
}*Btree;
int HasSubtree(BTree root1,BTree root2){
	int result = 0;
	if(root1 && root2){
		if(root1->element == root2->element){
			result = DoesTree1HaveTree2(root1,root2);
		}
		if(result==0){
			result = HasSubtree(root->left,root2);
		}
		if(result==0){
			result = HasSubtree(root->right,root2);
		}
	}
	return result;
}
int DoesTree1HaveTree2(Btree root1,Btree root2){
	if(!root2){
		return 1;
	}
	if(!root1){
		return 0;
	}
	if(root1->element != root2->element){
		return 0;
	}
	return DoesTree1HaveTree2(root1->left,root2->left) &&
		DoesTree1HaveTree2(root1->right,root2->right);
}
```

----------

> 设计算法，计算二叉树T的最大子树和
```cpp
	int MaxSubTree(BiNode* T,int* s){
		//s保存当前结点为根的树的结点和
		int a,b,m,n;
		a=b=0;
		if(!T){
			*s = 0;
			return 0;
		}
		if(T->left==NULL && T->right==NULL){
			*s = T->data;
			return T->data;
		}
		m = MaxSubTree(T->left,&a);
		n = MaxSubTree(T->right,&b);
		*s = a+b+T->data;
		return Max3(*s,m,n);
	}
```

----------

> 已知由n(n≥2)各正整数构成的集合A={a$_k$|0≤k<n}，将其划分为两个不相交的子集A$_1$和A$_2$，元素个数分别是n$_1$和n$_2$，A$_1$和A$_2$中元素之和分别为S$_1$和S$_2$。设计一个尽可能高效的划分算法，满足|n$_1$-n$_2$|最小且|S$_1$-S$_2$|最大(将$\lfloor{n/2}\rfloor$个元素放在A$_1$中，其余的元素放在A$_2$中，即可满足题目要求)
```cpp
/*仿照快速排序的思想，基于枢轴将n个整数划分为两个子集，然后根据划分后的枢轴所处的位置i分别处理，无需对全部元素进行全排序*/
int setPartition(int a[],int n){
	int pivotkey,low = 0,low0 = 0,high = n-1,high0 = n-1;
	int flag = 1,k = n/2,i;
	int s1=0,s2=0;
	while(flag){
		pivotkey = a[low];
		while(low<high){
			while(low<high && a[high]>=pivotkey){
				high--;
			}
			if(low!=high){
				a[low] = a[high];
			}
			while(low<high && a[low]<=pivotkey){
				low++;
			}
			if(low!=high){
				a[high] = a[low];
			}
		}//end of while(low<high)
		a[low] = pivotkey;
		if(low==k-1){
			flag = 0;//如果枢轴元素是第n/2个元素，划分成功
		}else{
			if(low < k-1){
				//枢轴及之前的所有元素属于A1
				low0 =++low;
				high = high0;
			}else{
				//枢轴及之后的所有元素属于A2
				high0 = --high;
				low = low0;
			}
		}
	}
	for(i=0;i<k;i++){
		s1 += a[i];
	}
	for(i=k;i<n;i++){
		s2 += a[i];
	}
	return s2-s1;
}
```

----------

> 用1,2,3,...9组成3个三位数abc,def和ghi，每个数字恰好使用一次，要求abc:def:ghi=1:2:3。
```cpp
int main(){
	int i,j;
	int i1,i2,i3;
	int array[10];
	int flag = 1;
	//最小的三位数也就是123（要求每位数字不一样），三位数乘以3需要不超过1000
	for(i=123;i<333;i++){
		i1 = i;
		i2 = i*2;
		i3 = i*3;
		memset(array,0,sizeof(array));
		array[i1/100]++;
		array[i1/10%10]++;
		array[i1%10]++;
		array[i2/100]++;
		array[i2/10%10]++;
		array[i2%10]++;
		array[i3/100]++;
		array[i3/10%10]++;
		array[i3%10]++;
		for(j=1;j<=9;j++){
			if(array[j] != 1){
				flag = 0;
			}
		}
		if(flag){
			printf("%d %d %d",i1,i2,i3);
		}
		flag = 1;
	}
	return 0;
}
```

![suda-morris](http://i.imgur.com/Nn7Krru.gif)