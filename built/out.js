System.register("data/go", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var data;
    return {
        setters: [],
        execute: function () {
            data = "(;FF[4]GM[1]SZ[19]CA[UTF-8]SO[gokifu.com]BC[cn]WC[cn]PB[Gu Li]BR[9p]PW[Shi Yue]WR[5p]KM[7.5]DT[2012-10-21]RE[B+R];B[qd];W[dd];B[pq];W[dq];B[fc];W[cf];B[kc];W[qn];B[qp];W[pj];B[qh];W[on];B[pm];W[pn];B[mq];W[od];B[pf];W[qc];B[rc];W[of];B[og];W[pc];B[qk];W[pk];B[qj];W[ql];B[nf];W[rb];B[rd];W[mc];B[do];W[co];B[dp];W[cp];B[eq];W[cn];B[dr];W[cq];B[fp];W[dn];B[fn];W[jp];B[mo];W[gq];B[ho];W[iq];B[jn];W[lp];B[lq];W[kn];B[nm];W[om];B[km];W[in];B[io];W[jo];B[jm];W[lo];B[mp];W[lm];B[ll];W[kq];B[mm];W[ln];B[nk];W[qi];B[ri];W[pi];B[rj];W[op];B[oq];W[ok];B[el];W[dk];B[fj];W[dl];B[rl];W[nj];B[rm];W[mk];B[nl];W[qm];B[kk];W[ph];B[pg];W[mi];B[dg];W[df];B[db];W[eg];B[ei];W[eb];B[fb];W[cb];B[dc];W[cc];B[ed];W[da];B[ec];W[di];B[cd];W[bd];B[de];W[ce];B[dj];W[dh];B[fr];W[gr];B[cj];W[ek];B[ej];W[fk];B[gk];W[gl];B[hk];W[hl];B[il];W[hm];B[im];W[gp];B[fo];W[em];B[hn];W[ic];B[mb];W[nb];B[md];W[lb];B[lc];W[ma];B[kb];W[gg];B[ff];W[fg];B[gi];W[he];B[hd];W[id];B[ie];W[je];B[if];W[jf];B[hf];W[hc];B[nc];W[mb];B[nd];W[gd];B[gf];W[fe];B[ob];W[oc];B[pb];W[oa];B[ee];W[ef];B[ig];W[jg];B[ih];W[qb];B[jd];W[gb];B[jc];W[gc];B[ge];W[fd];B[ea];W[ca];B[ib];W[ga];B[hb];W[fa];B[ha];W[eb];B[kr];W[jr];B[ea];W[rh];B[hd])";
            exports_1("default", data);
        }
    };
});
System.register("module/demo", ["data/go", "jquery"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var go_1, $;
    return {
        setters: [
            function (go_1_1) {
                go_1 = go_1_1;
            },
            function ($_1) {
                $ = $_1;
            }
        ],
        execute: function () {
            $('[data-wgo]').attr('data-wgo', go_1["default"]);
            debugger;
            // document.getElementById('container').setAttribute('data-wgo', data)
        }
    };
});
//# sourceMappingURL=out.js.map