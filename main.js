"use strict";
//入力変数
let in_Cpu = 0;
let in_Unitpoints = 16;
let in_Boxname = "";
let in_DOII = 0;
let in_DOIS = 0;
let in_DII = 0;
let in_DIS = 16;
let in_DIA = 0;
let in_DO = 0;
let in_SI = 0;
let in_AI = 0;
let in_RI = 0;
let in_AO = 0;
//出力変数１
let out_DOCX = 0;
let out_DOTX = 0;
let out_DIS = 0;
let out_DIA = 0;
let out_Total = 0;
//出力変数2
let out_kv8000 = 0;
let out_kv_b16x = 0;
let out_kv_b16t = 0;
let out_kv_c32x = 0;
let out_kv_c32t = 0;
let out_kv_c64x = 0;
let out_kv_c64t = 0;
let out_kv_tp40 = 0;
let out_kv_da40v = 0;
out_DOCX = in_DOII + in_DOIS + in_DO;
out_DOTX = in_DOII + in_DOIS + in_DO;
out_DIS = in_DOII + in_DOIS + in_DII + in_DIS;
out_DIA = in_DOII + in_DII + in_DIA;
//in_SI
//in_RI
//in_AI
//in_AO
//in_Comment
out_Total = out_DOCX + out_DOTX + out_DIS + out_DIA + in_SI + in_RI + in_AI + in_AO;
out_kv8000 = in_Cpu;
//di
out_kv_b16x = Math.ceil((out_DIS + out_DIA + in_SI) / 16);
out_kv_c32x = Math.ceil((out_DIS + out_DIA + in_SI) / 32);
out_kv_c64x = Math.ceil((out_DIS + out_DIA + in_SI) / 64);
//do
out_kv_b16t = Math.ceil((out_DOCX + out_DOTX) / 16);
out_kv_c32t = Math.ceil((out_DOCX + out_DOTX) / 32);
out_kv_c64t = Math.ceil((out_DOCX + out_DOTX) / 64);
//ai
out_kv_tp40 = Math.ceil((in_AI + in_RI) / 4);
//ao
out_kv_da40v = Math.ceil(in_AO / 4);
let Point_list = "";
if (in_Unitpoints == 16) {
    Point_list =
        `
    盤名称:${in_Boxname}
    DO(cx):${out_DOCX}
    DO(tx):${out_DOTX}
    DIS:${out_DIS}
    DIA:${out_DIA}
    SI:${in_SI}
    AI:${in_AI}
    RI:${in_RI}
    AO:${in_AO}
    合計:${out_Total}
    KV8000(CPU):${out_kv8000}
    KV-B16X(入力):${out_kv_b16x}
    KV-B16T(出力):${out_kv_b16t}
    KV-TP40(アナログ入力):${out_kv_tp40}
    KV-DA40V(アナログ出力):${out_kv_da40v}
    `;
}
else if (in_Unitpoints == 32) {
    Point_list =
        `
    盤名称:${in_Boxname}
    DO(cx):${out_DOCX}
    DO(tx):${out_DOTX}
    DIS:${out_DIS}
    DIA:${out_DIA}
    SI:${in_SI}
    AI:${in_AI}
    RI:${in_RI}
    AO:${in_AO}
    合計:${out_Total}
    KV8000(CPU):${out_kv8000}
    KV-C32X(入力):${out_kv_c32x}
    KV-C32T(出力):${out_kv_c32t}
    KV-TP40(アナログ入力):${out_kv_tp40}
    KV-DA40V(アナログ出力):${out_kv_da40v}
    `;
}
else if (in_Unitpoints == 64) {
    Point_list =
        `
    盤名称:${in_Boxname}
    DO(cx):${out_DOCX}
    DO(tx):${out_DOTX}
    DIS:${out_DIS}
    DIA:${out_DIA}
    SI:${in_SI}
    AI:${in_AI}
    RI:${in_RI}
    AO:${in_AO}
    合計:${out_Total}
    KV8000(CPU):${out_kv8000}
    KV-C64X(入力):${out_kv_c64x}
    KV-C64T(出力):${out_kv_c64t}
    KV-TP40(アナログ入力):${out_kv_tp40}
    KV-DA40V(アナログ出力):${out_kv_da40v}
    `;
}
console.log(Point_list);
