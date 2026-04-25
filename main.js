"use strict";
var btn = document.getElementById("btn");
btn.onclick = function () {
    //入力変数
    let in_Cpu = parseFloat(document.getElementById("in_Cpu").value);
    let in_Unitpoints = parseFloat(document.getElementById("in_Unitpoints").value);
    let in_Boxname = document.getElementById("in_Boxname").value;
    let in_DOII = parseFloat(document.getElementById("in_DOII").value);
    let in_DOIS = parseFloat(document.getElementById("in_DOIS").value);
    let in_DII = parseFloat(document.getElementById("in_DII").value);
    let in_DIS = parseFloat(document.getElementById("in_DIS").value);
    let in_DIA = parseFloat(document.getElementById("in_DIA").value);
    let in_DO = parseFloat(document.getElementById("in_DO").value);
    let in_DO_Make = parseFloat(document.getElementById("in_DO_Make").value);
    let in_SI = parseFloat(document.getElementById("in_SI").value);
    let in_AI = parseFloat(document.getElementById("in_AI").value);
    let in_RI = parseFloat(document.getElementById("in_RI").value);
    let in_AO = parseFloat(document.getElementById("in_AO").value);
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
    //in_DO_Make
    //in_DO
    //in_SI
    //in_RI
    //in_AI
    //in_AO
    out_Total = out_DOCX + out_DOTX + in_DO_Make + out_DIS + out_DIA + in_SI + in_RI + in_AI + in_AO;
    out_kv8000 = in_Cpu;
    //di
    out_kv_b16x = Math.ceil((out_DIS + out_DIA + in_SI) / 16);
    out_kv_c32x = Math.ceil((out_DIS + out_DIA + in_SI) / 32);
    out_kv_c64x = Math.ceil((out_DIS + out_DIA + in_SI) / 64);
    //do
    out_kv_b16t = Math.ceil((out_DOCX + out_DOTX + in_DO_Make) / 16);
    out_kv_c32t = Math.ceil((out_DOCX + out_DOTX + in_DO_Make) / 32);
    out_kv_c64t = Math.ceil((out_DOCX + out_DOTX + in_DO_Make) / 64);
    //ai
    out_kv_tp40 = Math.ceil((in_AI + in_RI) / 4);
    //ao
    out_kv_da40v = Math.ceil(in_AO / 4);
    let Point_list = "";
    if (in_Unitpoints == 16) {
        Point_list =
            `
      盤名称:${in_Boxname}
      
      DO(cx)  :${out_DOCX}
      DO(tx)  :${out_DOTX}
      DO(連続):${in_DO_Make}
      DIS     :${out_DIS}
      DIA     :${out_DIA}
      SI      :${in_SI}
      AI      :${in_AI}
      RI      :${in_RI}
      AO      :${in_AO}
      合計    :${out_Total}

      KV8000(CPU)           :${out_kv8000}
      KV-B16X(入力)         :${out_kv_b16x}
      KV-B16T(出力)         :${out_kv_b16t}
      KV-TP40(アナログ入力) :${out_kv_tp40}
      KV-DA40V(アナログ出力):${out_kv_da40v}
      `;
    }
    else if (in_Unitpoints == 32) {
        Point_list =
            `
      盤名称:${in_Boxname}
      
      DO(cx)  :${out_DOCX}
      DO(tx)  :${out_DOTX}
      DO(連続):${in_DO_Make}
      DIS     :${out_DIS}
      DIA     :${out_DIA}
      SI      :${in_SI}
      AI      :${in_AI}
      RI      :${in_RI}
      AO      :${in_AO}
      合計    :${out_Total}

      KV8000(CPU)           :${out_kv8000}
      KV-C32X(入力)         :${out_kv_c32x}
      KV-C32T(出力)         :${out_kv_c32t}
      KV-TP40(アナログ入力) :${out_kv_tp40}
      KV-DA40V(アナログ出力):${out_kv_da40v}
      `;
    }
    else if (in_Unitpoints == 64) {
        Point_list =
            `
      盤名称:${in_Boxname}
      
      DO(cx)  :${out_DOCX}
      DO(tx)  :${out_DOTX}
      DO(連続):${in_DO_Make}
      DIS     :${out_DIS}
      DIA     :${out_DIA}
      SI      :${in_SI}
      AI      :${in_AI}
      RI      :${in_RI}
      AO      :${in_AO}
      
      合計    :${out_Total}
      KV8000(CPU)           :${out_kv8000}
      KV-C64X(入力)         :${out_kv_c64x}
      KV-C64T(出力)         :${out_kv_c64t}
      KV-TP40(アナログ入力) :${out_kv_tp40}
      KV-DA40V(アナログ出力):${out_kv_da40v}
      `;
    }
    document.getElementById("Point_list").innerText = Point_list.toString();
};
