module alu (
  input  [31:0] alu_data1_i,
  input  [31:0] alu_data2_i,
  input  [ 3:0] alu_op_i,
  output [31:0] alu_result_o
);

  reg  [31:0] result;

  // alu_op_i 的第3位和第1位为1时，做减法运算，这是为减法指令或者比较大小而准备的
  wire [31:0] sum    = alu_data1_i + ((alu_op_i[3] | alu_op_i[1]) ? -alu_data2_i : alu_data2_i);
  // 根据前面两个操作数相减的结果判断两个操作数是否相等
  wire        neq    = |sum;
  // 比较两个操作数的大小：
  // 如果操作数的符号位相同，则根据两个操作数相减的差值的符号位去判断
  // 如果操作数的符号位不同，先根据alu_op_i 的最低位判断是否是无符号数比较运算
  wire        cmp    = (alu_data1_i[31] == alu_data2_i[31]) ? sum[31]
                     : alu_op_i[0] ? alu_data2_i[31] : alu_data1_i[31];
  wire [ 4:0] shamt  = alu_data2_i[4:0];
  // 判断是左移还是右移，如果是左移，就先对源操作数做镜像处理
  wire [31:0] shin   = alu_op_i[2] ? alu_data1_i : reverse(alu_data1_i);
  // 判断是算术右移还是逻辑右移，如果是算术右移，需要在最高位补一个符号位
  wire [32:0] shift  = {alu_op_i[3] & shin[31], shin};
  // $signed() 函数会在右移操作前先把操作数的符号位扩位成跟结果相同的位宽
  wire [32:0] shiftt = ($signed(shift) >>> shamt);
  wire [31:0] shiftr = shiftt[31:0];
  // 左移的结果是右移后的结果再进行镜像处理
  wire [31:0] shiftl = reverse(shiftr);

  always @(*) begin
    case(alu_op_i)
      `ALU_OP_ADD:    result <= sum;
      `ALU_OP_SUB:    result <= sum;
      `ALU_OP_SLL:    result <= shiftl;
      `ALU_OP_SLT:    result <= cmp;
      `ALU_OP_SLTU:   result <= cmp;
      `ALU_OP_XOR:    result <= (alu_data1_i ^ alu_data2_i);
      `ALU_OP_SRL:    result <= shiftr;
      `ALU_OP_SRA:    result <= shiftr;
      `ALU_OP_OR:     result <= (alu_data1_i | alu_data2_i);
      `ALU_OP_AND:    result <= (alu_data1_i & alu_data2_i);

      `ALU_OP_EQ:     result <= {31'b0, ~neq};
      `ALU_OP_NEQ:    result <= {31'b0, neq};
      `ALU_OP_GE:     result <= {31'b0, ~cmp};
      `ALU_OP_GEU:    result <= {31'b0, ~cmp};
      default:        begin
                      result <= 32'b0;
                      //$display("*** alu error ! ***%x", alu_op_i);
        end
    endcase
  end

  function [31:0] reverse;
    input [31:0] in;
    integer i;
    for(i=0; i<32; i=i+1) begin
      reverse[i] = in[31-i];
    end
  endfunction

  assign alu_result_o = result;

endmodule
