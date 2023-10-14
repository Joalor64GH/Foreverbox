/* this is my first incredimod so feedback would be nice :) */
var app = new function() {
    this.name = "Battle", this.version = "1", this.date = "2023", this.folder = "asset-v1/", this.looptime = 8727, this.bpm = 110, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !0, this.bonusendloopA = !6, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#7905ff", this.col0 = "#7905ff", this.col1 = "#7905ff", this.col2 = "#320169", this.col3 = "#320169", this.col4 = "#320169", this.animearray = [{
        name: "1_kicker",
        color: "FF66A8",
        uniqsnd: !0
    }, {
        name: "2_clap",
        color: "FF66A8",
        uniqsnd: !0
    }, {
        name: "3_snaresque",
        color: "FF66A8",
        uniqsnd: !0
    }, {
        name: "4_clickclick",
        color: "FF66A8",
        uniqsnd: !0
    }, {
        name: "5_cymbal",
        color: "FF66A8",
        uniqsnd: !0
    }, {
        name: "6_bassus",
        color: "9167E1",
        uniqsnd: !0
    }, {
        name: "7_taiko",
        color: "9167E1",
        uniqsnd: !0
    }, {
        name: "8_drumba",
        color: "9167E1",
        uniqsnd: !0
    }, {
        name: "9_triang",
        color: "9167E1",
        uniqsnd: !0
    }, {
        name: "10_pad",
        color: "9167E1",
        uniqsnd: !0
    }, {
        name: "11_pian",
        color: "3CFFE5",
        uniqsnd: !0
    }, {
        name: "12_vibra",
        color: "3CFFE5",
        uniqsnd: !0
    }, {
        name: "13_siren",
        color: "3CFFE5",
        uniqsnd: !0
    }, {
        name: "14_saw",
        color: "3CFFE5",
        uniqsnd: !0
    }, {
        name: "15_synthia",
        color: "3CFFE5",
        uniqsnd: !0
    }, {
        name: "16_chora",
        color: "2B00FF",
        uniqsnd: !0
    }, {
        name: "17_estrella",
        color: "2B00FF",
        uniqsnd: !0
    }, {
        name: "18_bagpiper",
        color: "2B00FF",
        uniqsnd: !0
    }, {
        name: "19_khhor",
        color: "2B00FF",
        uniqsnd: !0
    }, {
        name: "20_cuckoo",
        color: "2B00FF",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Prepare",
        src: "bonus_prepare-hb.mp4",
        code: "1,3,6,11,19",
        sound: "21_bonus_prepare",
        aspire: "aspire-prepare"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};