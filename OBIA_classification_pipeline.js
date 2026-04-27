/**
 * Charlotte Light Rail: Dual-Model OBIA & Region Change Analysis
 */

// =====================================================
// 1. DATA INPUT PLACEHOLDERS
// =====================================================
// Paste your exported training feature array here:
var savedData = [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78508593406161,
        35.25873728919953
      ]
    },
    "id": "0",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7837877448984,
        35.25856207563009
      ]
    },
    "id": "1",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78167416419467,
        35.25891250239018
      ]
    },
    "id": "2",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78158833350619,
        35.25859711837429
      ]
    },
    "id": "3",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78045896142409,
        35.258959855264614
      ]
    },
    "id": "4",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77941826432631,
        35.25899489783681
      ]
    },
    "id": "5",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7791285857527,
        35.25911754672019
      ]
    },
    "id": "6",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77477856301587,
        35.25843301808032
      ]
    },
    "id": "7",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77643080376905,
        35.26101738393244
      ]
    },
    "id": "8",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7769457878999,
        35.26170069400871
      ]
    },
    "id": "9",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77801867150586,
        35.26177953710829
      ]
    },
    "id": "10",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7776646199159,
        35.261972264362086
      ]
    },
    "id": "11",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77765090549012,
        35.263422579661245
      ]
    },
    "id": "12",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77827317798157,
        35.26357150228711
      ]
    },
    "id": "13",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77887399280091,
        35.263054652000385
      ]
    },
    "id": "14",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7785843142273,
        35.26277432504225
      ]
    },
    "id": "15",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77448589885255,
        35.262301271101386
      ]
    },
    "id": "16",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77324124924898,
        35.26356822257108
      ]
    },
    "id": "17",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79094352728508,
        35.25234090955766
      ]
    },
    "id": "18",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79002084738396,
        35.25389165551002
      ]
    },
    "id": "19",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79102744848437,
        35.25699101683633
      ]
    },
    "id": "20",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78800191671557,
        35.257464101774865
      ]
    },
    "id": "21",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78758349210925,
        35.25732392874764
      ]
    },
    "id": "22",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78851690084643,
        35.25865556271838
      ]
    },
    "id": "23",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78898896963305,
        35.25860299863434
      ]
    },
    "id": "24",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78416625728033,
        35.26343959349953
      ]
    },
    "id": "25",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78425016660714,
        35.26329439805725
      ]
    },
    "id": "26",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78441646356606,
        35.26317613558993
      ]
    },
    "id": "27",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7846042181971,
        35.263009691825054
      ]
    },
    "id": "28",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78475978631997,
        35.26286952838944
      ]
    },
    "id": "29",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78501191396737,
        35.262738124948356
      ]
    },
    "id": "30",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78498509187722,
        35.26321555643154
      ]
    },
    "id": "31",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78504946489358,
        35.263465221316416
      ]
    },
    "id": "32",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78503337163949,
        35.263640424285065
      ]
    },
    "id": "33",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7850548293116,
        35.263811246814754
      ]
    },
    "id": "34",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78561558126336,
        35.26435642345762
      ]
    },
    "id": "35",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78562631009942,
        35.264522864456225
      ]
    },
    "id": "36",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7856584966076,
        35.26471996519665
      ]
    },
    "id": "37",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78566386102563,
        35.264938965457
      ]
    },
    "id": "38",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78572286962395,
        35.265105405259
      ]
    },
    "id": "39",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78575505613213,
        35.26530250458237
      ]
    },
    "id": "40",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78518642782097,
        35.265101025268606
      ]
    },
    "id": "41",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78483352477494,
        35.26560628927257
      ]
    },
    "id": "42",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78519830520096,
        35.26568950853092
      ]
    },
    "id": "43",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78481206710282,
        35.266092463730786
      ]
    },
    "id": "44",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78454921061936,
        35.26607932391892
      ]
    },
    "id": "45",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78435609157029,
        35.266109983476646
      ]
    },
    "id": "46",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78413615043107,
        35.26614064302274
      ]
    },
    "id": "47",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78392157370988,
        35.26618882228603
      ]
    },
    "id": "48",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78366408164445,
        35.266232621591435
      ]
    },
    "id": "49",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78343341166917,
        35.2658033873775
      ]
    },
    "id": "50",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78370163257065,
        35.26573330810623
      ]
    },
    "id": "51",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78392157370988,
        35.26567198869415
      ]
    },
    "id": "52",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78412005717698,
        35.26565008889288
      ]
    },
    "id": "53",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78436145598832,
        35.2656325690476
      ]
    },
    "id": "54",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78462431247178,
        35.26559314938185
      ]
    },
    "id": "55",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78922718953146,
        35.2690390810224
      ]
    },
    "id": "56",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78899651955618,
        35.269109157434336
      ]
    },
    "id": "57",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78879803608908,
        35.26921427193859
      ]
    },
    "id": "58",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78988753148619,
        35.26917443065673
      ]
    },
    "id": "59",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78982315846983,
        35.268994859874475
      ]
    },
    "id": "60",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79037757748696,
        35.269658060956516
      ]
    },
    "id": "61",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7905277811918,
        35.26977193422509
      ]
    },
    "id": "62",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79071553582284,
        35.26989894652814
      ]
    },
    "id": "63",
    "properties": {
      "class": 0
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79288094810305,
        35.26147782162695
      ]
    },
    "id": "64",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78993051818667,
        35.26322111705302
      ]
    },
    "id": "65",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79086386954857,
        35.26056973597779
      ]
    },
    "id": "66",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79365336692406,
        35.26056973597779
      ]
    },
    "id": "67",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79460823333336,
        35.26075370565826
      ]
    },
    "id": "68",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79755484433151,
        35.26078952702286
      ]
    },
    "id": "69",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79637467236496,
        35.261420276763616
      ]
    },
    "id": "70",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79667507977463,
        35.25992223811331
      ]
    },
    "id": "71",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79638540120102,
        35.25858186426954
      ]
    },
    "id": "72",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7879358083705,
        35.26844684503558
      ]
    },
    "id": "73",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78691120452682,
        35.26811835864536
      ]
    },
    "id": "74",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78725452728072,
        35.26743948255169
      ]
    },
    "id": "75",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78878730725302,
        35.268412770398896
      ]
    },
    "id": "76",
    "properties": {
      "class": 1
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79675018162705,
        35.260465389829776
      ]
    },
    "id": "77",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79609572262741,
        35.26109614209337
      ]
    },
    "id": "78",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7954090771196,
        35.26081580836007
      ]
    },
    "id": "79",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79573094220139,
        35.26029017999639
      ]
    },
    "id": "80",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7972651657579,
        35.25998356187652
      ]
    },
    "id": "81",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79416453213669,
        35.2589410515915
      ]
    },
    "id": "82",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79470097393967,
        35.259799590447756
      ]
    },
    "id": "83",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79421088156204,
        35.25821426296863
      ]
    },
    "id": "84",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79584166464309,
        35.25746083707034
      ]
    },
    "id": "85",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79315064370485,
        35.25557321999367
      ]
    },
    "id": "86",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79603441105562,
        35.2527712490307
      ]
    },
    "id": "87",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7848700921586,
        35.26671712799281
      ]
    },
    "id": "88",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78478524348503,
        35.267804138474624
      ]
    },
    "id": "89",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78376063964134,
        35.268925370882975
      ]
    },
    "id": "90",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78388402125603,
        35.26783041753677
      ]
    },
    "id": "91",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78550407550102,
        35.26809758751814
      ]
    },
    "id": "92",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79054387444589,
        35.270564662928265
      ]
    },
    "id": "93",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79124124878976,
        35.27011355307043
      ]
    },
    "id": "94",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79095157021615,
        35.26995588301312
      ]
    },
    "id": "95",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79143436783883,
        35.269815731593454
      ]
    },
    "id": "96",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79163821572396,
        35.269360237805046
      ]
    },
    "id": "97",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79009326333139,
        35.269246363957805
      ]
    },
    "id": "98",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.79005571240518,
        35.26917628766455
      ]
    },
    "id": "99",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78999670380685,
        35.26897481798379
      ]
    },
    "id": "100",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78943343991372,
        35.269246363957805
      ]
    },
    "id": "101",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78772083871131,
        35.2691254894907
      ]
    },
    "id": "102",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78712002389197,
        35.269532807352846
      ]
    },
    "id": "103",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78677389788876,
        35.26988214114918
      ]
    },
    "id": "104",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78617308306943,
        35.27049968101628
      ]
    },
    "id": "105",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78546210116268,
        35.271095816521076
      ]
    },
    "id": "106",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.784619887532,
        35.27198488393101
      ]
    },
    "id": "107",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78415209617843,
        35.27246928362564
      ]
    },
    "id": "108",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78345472183456,
        35.27312621979031
      ]
    },
    "id": "109",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78281876889149,
        35.27349108002849
      ]
    },
    "id": "110",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78216269241426,
        35.27418514447207
      ]
    },
    "id": "111",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7813493580697,
        35.275139470065355
      ]
    },
    "id": "112",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7812957138894,
        35.27498618924668
      ]
    },
    "id": "113",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7806221977022,
        35.27567297957146
      ]
    },
    "id": "114",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77994091661242,
        35.27617661118739
      ]
    },
    "id": "115",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78038616330889,
        35.27627733713476
      ]
    },
    "id": "116",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77919181369347,
        35.276882047807206
      ]
    },
    "id": "117",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77881094001336,
        35.27738567190486
      ]
    },
    "id": "118",
    "properties": {
      "class": 2
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77272095214562,
        35.262459570738045
      ]
    },
    "id": "119",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77603616248803,
        35.260462355782686
      ]
    },
    "id": "120",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77731289397911,
        35.25967390851995
      ]
    },
    "id": "121",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77964105140404,
        35.258539095753214
      ]
    },
    "id": "122",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78452496021418,
        35.25869348584267
      ]
    },
    "id": "123",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.774324861691,
        35.26196509985484
      ]
    },
    "id": "124",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77512952439547,
        35.26204394269718
      ]
    },
    "id": "125",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77617867447836,
        35.261804659769716
      ]
    },
    "id": "126",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77593191124899,
        35.26140168324641
      ]
    },
    "id": "127",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77746613480551,
        35.261138871390756
      ]
    },
    "id": "128",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77787383057577,
        35.261550609586294
      ]
    },
    "id": "129",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77941961401686,
        35.263373423552736
      ]
    },
    "id": "130",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.77739484507477,
        35.26423921757412
      ]
    },
    "id": "131",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7800663252536,
        35.26485242044971
      ]
    },
    "id": "132",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7810748358432,
        35.26610509190079
      ]
    },
    "id": "133",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7829229424591,
        35.264951808866485
      ]
    },
    "id": "134",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7851509632244,
        35.26250189121828
      ]
    },
    "id": "135",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.78718765068584,
        35.262267683165874
      ]
    },
    "id": "136",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7899734335309,
        35.26185451677978
      ]
    },
    "id": "137",
    "properties": {
      "class": 3
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.76824388123956,
        35.26071223614187
      ]
    },
    "id": "138",
    "properties": {
      "class": 4
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7635040794254,
        35.261986726099806
      ]
    },
    "id": "139",
    "properties": {
      "class": 4
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.76024571828863,
        35.26288126362716
      ]
    },
    "id": "140",
    "properties": {
      "class": 4
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.75913528375646,
        35.26319663097069
      ]
    },
    "id": "141",
    "properties": {
      "class": 4
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.75682010998355,
        35.26382885176633
      ]
    },
    "id": "142",
    "properties": {
      "class": 4
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.75405174760813,
        35.264483920790745
      ]
    },
    "id": "143",
    "properties": {
      "class": 4
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.74795935033526,
        35.26619840184153
      ]
    },
    "id": "144",
    "properties": {
      "class": 4
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.7462671530244,
        35.2668963084899
      ]
    },
    "id": "145",
    "properties": {
      "class": 4
    }
  }
]; 

// Paste your region GeoJSON object here:
var raw_data_regionsGeoJSON = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-80.7331961461113,35.31212335427029],[-80.73578179560165,35.31236411350776],[-80.73680639944534,35.31309951910447],[-80.73809922419052,35.3145878194957],[-80.73963881216507,35.3150605680063],[-80.7413017817543,35.314420387068886],[-80.74252806401012,35.31328842279484],[-80.74377797341106,35.3121327851255],[-80.74528537487743,35.3106819026839],[-80.74718437885997,35.30879516731754],[-80.74862717515101,35.30737058441641],[-80.74949621087184,35.30610979572598],[-80.75121045388114,35.30358815940058],[-80.75174689568412,35.30275197444848],[-80.75293779648673,35.30102140892468],[-80.75376391686332,35.29976611048627],[-80.75424135006797,35.298570876030574],[-80.75466300823703,35.2970674678974],[-80.75497414448277,35.296056083089184],[-80.7554140267612,35.29455015660447],[-80.75574662067905,35.293460907107715],[-80.75603629925266,35.29251515487944],[-80.7564761815311,35.29152998455782],[-80.75724478469625,35.290365642173796],[-80.75842495666281,35.28903015071946],[-80.75963395125332,35.28791723644999],[-80.76074975020352,35.28685757036497],[-80.76235722596084,35.285422891749626],[-80.7628722100917,35.2848974230374],[-80.76362859303391,35.28405228703877],[-80.76438137149782,35.28303312811625],[-80.76498218631716,35.28199967257277],[-80.76555352021497,35.28073898352907],[-80.765923665059,35.279639810666104],[-80.76631673697158,35.27784347906885],[-80.76656350020093,35.2766304034385],[-80.76695234813617,35.274534908207194],[-80.76714010276721,35.27352762142746],[-80.76757008649619,35.27137156831716],[-80.76799923993858,35.26922248023741],[-80.76852355079812,35.26724872414341],[-80.76914045887155,35.26599976594965],[-80.77007923202676,35.264707672773675],[-80.7710631150841,35.26373634954066],[-80.7720716256737,35.26281653081792],[-80.77254381166144,35.261900890423256],[-80.77276911721867,35.260083102179586],[-80.77289008720048,35.2593445636037],[-80.7730188332332,35.258853968330726],[-80.77370547874101,35.258196916438095],[-80.77562583408233,35.25673832901011],[-80.77683819255707,35.255814050364584],[-80.77950970993555,35.254269449694284],[-80.78279031444077,35.25302964180703],[-80.78468931842332,35.252587195660034],[-80.78873690894271,35.25198473975499],[-80.79162833026076,35.251610472106776],[-80.79351660540725,35.251352009235],[-80.79648312857772,35.25091762055564],[-80.79722878268386,35.250764293912255],[-80.79834458163405,35.250348120132706],[-80.8013203409339,35.24987288579183],[-80.80571916371832,35.24925413486002],[-80.80708709031592,35.24891680894035],[-80.8088839853685,35.24833430284486],[-80.81052549728561,35.24764649914734],[-80.81143744835067,35.24675278371578],[-80.81219585281139,35.245394524929075],[-80.81328482967143,35.24457964450578],[-80.8147793111206,35.243512957040956],[-80.81623306840667,35.24247461613935],[-80.81769682050185,35.24129606120097],[-80.81957436681229,35.23977574384579],[-80.8216584301891,35.23816807114642],[-80.82359400744527,35.236683705599475],[-80.82432356829732,35.236157920760164],[-80.82572904582112,35.23578986934479],[-80.82770036352353,35.23504065511259],[-80.82945452821927,35.233813793668524],[-80.83083904789422,35.2328055924812],[-80.83259321258997,35.231504206567955],[-80.83379448296779,35.23054863173182],[-80.83662284106317,35.228415811283305],[-80.83782983511989,35.22754379403011],[-80.8403952199799,35.22577927921507],[-80.84227265997698,35.22431572642341],[-80.84409119768908,35.22304926243925],[-80.84624254065125,35.221784533516],[-80.84806644278137,35.220824797394165],[-80.84953475051923,35.21969101274285],[-80.85114944034619,35.21862607190013],[-80.85392600306665,35.216762709055345],[-80.85599130400811,35.21524552575566],[-80.85747724780236,35.213952623716004],[-80.85836237677728,35.21288899515143],[-80.85923677691613,35.21185464514211],[-80.86041158446466,35.2103907543857],[-80.8620029973149,35.20846082516676],[-80.8633131398891,35.20686237752569],[-80.86460596463426,35.20527566663405],[-80.86581295869097,35.20372306883162],[-80.8668643846248,35.20245190017679],[-80.86823174082284,35.20077010293521],[-80.86932071768288,35.199476970388574],[-80.87039901129788,35.198071242559614],[-80.87188917096624,35.19622415339943],[-80.87239879067907,35.19552714042428],[-80.87299424108038,35.19438297408406],[-80.87387937005529,35.1928661616806],[-80.87488096081753,35.19105502360712],[-80.87558489503603,35.18980703009021],[-80.87625544728975,35.188640862595506],[-80.87738733949404,35.18664022698112],[-80.87803343263363,35.18536006140381],[-80.87851086583828,35.18405791482435],[-80.8788380953381,35.18277328512822],[-80.87912240949368,35.18130010116523],[-80.8794960055667,35.17920332509131],[-80.87952762062335,35.177890909213886],[-80.87936668808246,35.17679911165283],[-80.87912528927112,35.175966003248696],[-80.8788677802259,35.174706726098634],[-80.87842402636097,35.17284452000109],[-80.87822554289387,35.172037681167986],[-80.8778557692539,35.170170022440836],[-80.8777793353675,35.1685016748274],[-80.87769350467904,35.167510612206904],[-80.87756620329603,35.16572394196558],[-80.87750183027967,35.16487317847055],[-80.87755796977504,35.16277493897933],[-80.87757680403914,35.16114194320182],[-80.87760362612929,35.160067463378205],[-80.87726246097264,35.15869143192201],[-80.87701569774327,35.157831823302914],[-80.87696357496158,35.1563857248834],[-80.87706549890414,35.155337497734884],[-80.87725118523629,35.15410340877096],[-80.87753013497382,35.152791989454116],[-80.87782517796546,35.15123183823169],[-80.87823575144039,35.14943489597417],[-80.8783864223359,35.14871039236314],[-80.87860431209442,35.1473168370244],[-80.87864805271892,35.146345815446054],[-80.87782193234233,35.142476918167944],[-80.87633607515056,35.13544697077326],[-80.8758803122447,35.13321413718187],[-80.87575259506296,35.13203215031721],[-80.87583842575144,35.13121613224935],[-80.87652507125925,35.129468434607695],[-80.87736192047191,35.1278889876711],[-80.87875889361096,35.12548023808074],[-80.88017509997083,35.1228915572464],[-80.8819882732649,35.11953931270024],[-80.88315771639539,35.11741056924855],[-80.88368879378034,35.11579578412097],[-80.88379023507402,35.114033789588014],[-80.88376756993252,35.111860642875016],[-80.88339627683425,35.110402788714275],[-80.88310659826064,35.10872642674645],[-80.88303858632614,35.10793862338306],[-80.88295007342865,35.107157472038246],[-80.88269874377478,35.10552900734108]]},"id":"1_0","properties":{"name":"Charlotte Light Rail","station_count":26,"type":"train_line","vertex_count":162}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.7344120368196,35.312236570475825]},"id":"2_0","properties":{"latitude":35.312236570475825,"longitude":-80.7344120368196,"name":"UNC Charlotte - Main","t":0.0036907278072367913,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.74538631704215,35.31058161268705]},"id":"2_1","properties":{"latitude":35.31058161268706,"longitude":-80.74538631704215,"name":"JW Clay Blvd","t":0.048001855004974406,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.75308132362007,35.30080331653214]},"id":"2_2","properties":{"latitude":35.30080331653214,"longitude":-80.75308132362007,"name":"McCullough","t":0.0911188512762044,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.7608130571335,35.2868010687808]},"id":"2_3","properties":{"latitude":35.2868010687808,"longitude":-80.7608130571335,"name":"University City Blvd","t":0.14893698463799404,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.76630345697401,35.27790416379912]},"id":"2_4","properties":{"latitude":35.27790416379912,"longitude":-80.76630345697401,"name":"Tom Hunter","t":0.186517905897706,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.77280066722506,35.259890478398994]},"id":"2_5","properties":{"latitude":35.25989047839899,"longitude":-80.77280066722506,"name":"Old Concord Road","t":0.25736727192892694,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.7928795738855,35.25143920484163]},"id":"2_6","properties":{"latitude":35.25143920484163,"longitude":-80.79287957388549,"name":"Sugar Creek","t":0.32920032901007307,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.80638016912003,35.249091133501636]},"id":"2_7","properties":{"latitude":35.249091133501636,"longitude":-80.80638016912003,"name":"E 36th St","t":0.37097616803120514,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.81712775464962,35.241754251178556]},"id":"2_8","properties":{"latitude":35.241754251178556,"longitude":-80.81712775464962,"name":"25th St","t":0.41449563780467613,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.83498572647976,35.2296503370687]},"id":"2_9","properties":{"latitude":35.2296503370687,"longitude":-80.83498572647976,"name":"9th St","t":0.485192836846934,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.8232776748248,35.23692629727387]},"id":"2_10","properties":{"latitude":35.23692629727387,"longitude":-80.8232776748248,"name":"Parkwood","t":0.44024630371154616,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.83815195422886,35.22732223641213]},"id":"2_11","properties":{"latitude":35.22732223641213,"longitude":-80.83815195422886,"name":"7th st","t":0.49805508934049325,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.84095459695199,35.22534321977341]},"id":"2_12","properties":{"latitude":35.22534321977341,"longitude":-80.84095459695199,"name":"Charlotte Transporation Center","t":0.5092429734679865,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.84686276627068,35.22145817240364]},"id":"2_13","properties":{"latitude":35.221458172403636,"longitude":-80.84686276627068,"name":"Brooklyn Village","t":0.5321879827047468,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.84337784861387,35.22354605363129]},"id":"2_14","properties":{"latitude":35.223546053631296,"longitude":-80.84337784861387,"name":"3rd St/ Convention Center","t":0.519128134793164,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.85089765246714,35.21879213488243]},"id":"2_15","properties":{"latitude":35.21879213488243,"longitude":-80.85089765246714,"name":"Carson","t":0.5478995478230679,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.85527521254599,35.21577157283653]},"id":"2_16","properties":{"latitude":35.21577157283653,"longitude":-80.85527521254599,"name":"Bland St","t":0.565204415569357,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.85899747086205,35.212137725839064]},"id":"2_17","properties":{"latitude":35.212137725839064,"longitude":-80.85899747086205,"name":"East/West Blvd","t":0.5827947129442014,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.8691101297894,35.199727037595366]},"id":"2_18","properties":{"latitude":35.199727037595366,"longitude":-80.8691101297894,"name":"New Bern","t":0.6379011293614125,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.87500255750574,35.19083944469681]},"id":"2_19","properties":{"latitude":35.19083944469681,"longitude":-80.87500255750572,"name":"Scaleybark","t":0.6753604803189912,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.87908060861434,35.17574752128322]},"id":"2_20","properties":{"latitude":35.17574752128322,"longitude":-80.87908060861434,"name":"Woodlawn","t":0.7337030760075813,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.87755264759839,35.16297368861178]},"id":"2_21","properties":{"latitude":35.16297368861178,"longitude":-80.87755264759839,"name":"Tyvola","t":0.7812773521487516,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.87750662309459,35.15290251919937]},"id":"2_22","properties":{"latitude":35.15290251919937,"longitude":-80.87750662309459,"name":"Archdale","t":0.8188050677276463,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.8763781503253,35.135646134530624]},"id":"2_23","properties":{"latitude":35.135646134530624,"longitude":-80.8763781503253,"name":"Arrowwood","t":0.8834444112126728,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.88203643994903,35.11945163281659]},"id":"2_24","properties":{"latitude":35.119451632816585,"longitude":-80.88203643994903,"name":"Sharon Rd","t":0.9473536007315161,"type":"station"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-80.88292857301273,35.1070181814022]},"id":"2_25","properties":{"latitude":35.1070181814022,"longitude":-80.88292857301273,"name":"I-485/South Blvd","t":0.9944525966735499,"type":"station"}}]};
// =====================================================
// 2. SETUP & IMAGERY (NAIP + OBIA)
// =====================================================
// Default fallback if GeoJSON is empty for the train line center
var defaultCenter = ee.Geometry.Point([-80.8431, 35.2271]);
Map.centerObject(defaultCenter, 12);

var getNAIP = function(year) {
  // Using a wide buffer to ensure coverage across all possible stations
  var boundBox = defaultCenter.buffer(20000); 
  return ee.ImageCollection("USDA/NAIP/DOQQ")
    .filterBounds(boundBox).filterDate(year + '-01-01', year + '-12-31')
    .mosaic().clip(boundBox);
};

var naip2014 = getNAIP('2014');
var naip2020 = getNAIP('2020');

Map.addLayer(naip2014, {bands: ['R', 'G', 'B']}, 'NAIP 2014', false);
Map.addLayer(naip2020, {bands: ['R', 'G', 'B']}, 'NAIP 2020', true);

var getOBIAStack = function(img) {
  var snic = ee.Algorithms.Image.Segmentation.SNIC({
    image: img, size: 20, compactness: 0.75, connectivity: 8, neighborhoodSize: 40
  });
  var ndvi = img.normalizedDifference(['N', 'R']).rename('NDVI');
  var texture = img.select('N').glcmTexture({size: 3}).select('N_ent').rename('Roughness');
  return snic.select(['R_mean', 'G_mean', 'B_mean', 'N_mean'])
    .addBands([ndvi, texture, ee.Image.pixelArea().rename('Area')]);
};

var stack2014 = getOBIAStack(naip2014);
var stack2020 = getOBIAStack(naip2020);

// =====================================================
// 3. REGION COMPUTATION LOGIC
// =====================================================
var stationsData = [];
var trainLineCoordinates = [];
var regionPolygons = [];

// Helper Geometry Functions
function haversineDistance(a, b) {
  var lat1 = a[1] * Math.PI / 180, lat2 = b[1] * Math.PI / 180;
  var dLat = lat2 - lat1, dLon = (b[0] - a[0]) * Math.PI / 180;
  var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 6371000 * (2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)));
}

function getPointAtT(line, t) {
  var total = 0, seg = [];
  for (var i = 0; i < line.length - 1; i++) {
    var d = haversineDistance(line[i], line[i + 1]);
    seg.push(d); total += d;
  }
  var target = t * total, acc = 0;
  for (var j = 0; j < seg.length; j++) {
    if (acc + seg[j] >= target) {
      var r = (target - acc) / seg[j];
      return [line[j][0] + (line[j + 1][0] - line[j][0]) * r, line[j][1] + (line[j + 1][1] - line[j][1]) * r];
    }
    acc += seg[j];
  }
  return line[line.length - 1];
}

function getSegment(line, t0, t1) {
  var pts = [getPointAtT(line, t0)];
  var total = 0, seg = [];
  for (var i = 0; i < line.length - 1; i++) {
    var d = haversineDistance(line[i], line[i + 1]);
    seg.push(d); total += d;
  }
  var acc = 0;
  for (var j = 0; j < seg.length; j++) {
    var next = acc + seg[j];
    var a = acc / total, b = next / total;
    if (b >= t0 && a <= t1) pts.push(line[j + 1]);
    acc = next;
  }
  pts.push(getPointAtT(line, t1));
  return ee.Geometry.LineString(pts);
}

// Process GeoJSON
if (Object.keys(raw_data_regionsGeoJSON).length > 0) {
  var fcRegions = ee.FeatureCollection(raw_data_regionsGeoJSON);
  var trainLineFeature = fcRegions.filter(ee.Filter.eq('type', 'train_line')).first();
  trainLineCoordinates = trainLineFeature.geometry().coordinates().getInfo();
  
  stationsData = fcRegions.filter(ee.Filter.eq('type', 'station')).getInfo().features.map(function(f) {
    return { name: f.properties.name, lon: f.geometry.coordinates[0], lat: f.geometry.coordinates[1], t: f.properties.t };
  });

  var sorted = stationsData.slice().sort(function(a, b) { return a.t - b.t; });
  var mids = [];
  for (var i = 0; i < sorted.length - 1; i++) mids.push((sorted[i].t + sorted[i + 1].t) / 2);

  var regions = [];
  for (var j = 0; j < sorted.length; j++) {
    regions.push({
      name: sorted[j].name,
      start: (j === 0) ? 0 : mids[j - 1],
      end: (j === sorted.length - 1) ? 1 : mids[j]
    });
  }

  // Create EE Polygons for regions
  var features = regions.map(function(reg) {
    var lineGeom = getSegment(trainLineCoordinates, reg.start, reg.end);
    var polyGeom = lineGeom.buffer(500); // 500m buffer
    return ee.Feature(polyGeom, { 'station_name': reg.name });
  });
  regionPolygons = ee.FeatureCollection(features);
  Map.addLayer(regionPolygons.style({fillColor: '00000000', color: 'FF0000', width: 2}), {}, 'Region Boundaries', true);
}

// =====================================================
// 4. DRAWING TOOLS & UI CLASSES
// =====================================================
var drawingTools = Map.drawingTools();
drawingTools.setShown(false); 
while (drawingTools.layers().length() > 0) { drawingTools.layers().remove(drawingTools.layers().get(0)); }

var classInfo = [
  {label: 'Buildings', name: 'Buildings', color: '#8B0000', value: 0},
  {label: 'Trees', name: 'Trees', color: '#004d00', value: 1},
  {label: 'Fields', name: 'Fields', color: '#1a4d1a', value: 2},
  {label: 'Roads', name: 'Roads', color: '#222222', value: 3},
  {label: 'Train Lines', name: 'TrainLines', color: '#330033', value: 4}
];

classInfo.forEach(function(info) {
  var layer = ui.Map.GeometryLayer({geometries: null, name: info.name, color: info.color});
  drawingTools.layers().add(layer);
});

// Load Saved Training Data
if (savedData.length > 0) {
  var importedFC = ee.FeatureCollection(savedData);
  classInfo.forEach(function(info) {
    var layer = drawingTools.layers().get(info.value);
    var filtered = importedFC.filter(ee.Filter.eq('class', info.value));
    filtered.evaluate(function(fc) {
      if (fc && fc.features) {
        fc.features.forEach(function(f) { layer.add(ee.Geometry(f.geometry)); });
      }
    });
  });
}

// =====================================================
// 5. UI DASHBOARD & MONITOR
// =====================================================
var mainPanel = ui.Panel({style: {position: 'top-left', padding: '12px', width: '300px'}});
mainPanel.add(ui.Label('Dual-Model Hardcoder', {fontWeight: 'bold', fontSize: '18px', margin: '0 0 10px 0'}));

var classSelect = ui.Select({
  items: classInfo.map(function(info) { return {label: info.label, value: info.value}; }),
  value: 0,
  onChange: function(val) { drawingTools.setSelected(drawingTools.layers().get(val)); }
});
mainPanel.add(ui.Label('Current Class:', {fontSize: '11px', color: '#666'}));
mainPanel.add(classSelect);

var drawPolygon = ui.Button('Polygon', function() { drawingTools.setShape('polygon'); drawingTools.draw(); });
var drawPoint = ui.Button('Point', function() { drawingTools.setShape('point'); drawingTools.draw(); });
mainPanel.add(ui.Panel([drawPolygon, drawPoint], ui.Panel.Layout.flow('horizontal')));

mainPanel.add(ui.Label('Collection Monitor:', {fontWeight: 'bold', margin: '15px 0 5px 0'}));
var countLabels = {};
classInfo.forEach(function(info) {
  // Dark uniform text for readability
  countLabels[info.value] = ui.Label(info.label + ': 0 m²', {fontSize: '12px', color: '#111111', fontWeight: 'bold'});
  mainPanel.add(countLabels[info.value]);
});

var refreshMonitor = function() {
  classInfo.forEach(function(info) {
    var layer = drawingTools.layers().get(info.value);
    var geometries = layer.geometries();
    if (geometries.length() > 0) {
      // Calculate continuous area in sq meters properly
      var unionGeom = ee.Geometry.MultiPolygon(geometries.map(function(g) { return ee.Geometry(g); }));
      unionGeom.area().evaluate(function(val) {
        if (val !== undefined) countLabels[info.value].setValue(info.label + ': ' + Math.round(val).toLocaleString() + ' m²');
      });
    } else {
      countLabels[info.value].setValue(info.label + ': 0 m²');
    }
  });
};
drawingTools.onDraw(refreshMonitor); drawingTools.onEdit(refreshMonitor); drawingTools.onErase(refreshMonitor);

var exportEncoded = ui.Button({
  label: 'Generate Script Code (Console)',
  style: {width: '100%', color: '#444'},
  onClick: function() {
    var allFeatures = classInfo.map(function(info) {
      return drawingTools.layers().get(info.value).geometries().map(function(geom) {
        return ee.Feature(ee.Geometry(geom), {'class': info.value});
      });
    });
    var samples = ee.FeatureCollection(ee.List(allFeatures).flatten());
    samples.evaluate(function(fc) {
      print('--- COPY THE ARRAY BELOW ---'); print(fc.features); print('--- END OF DATA ---');
      alert('Data sent to Console. Click the Console tab, right-click the List, and select "Copy".');
    });
  }
});
mainPanel.add(exportEncoded);

// =====================================================
// 6. PROCESSING & MACHINE LEARNING
// =====================================================
var runButton = ui.Button({
  label: 'PROCESS DUAL MODELS & REGIONS',
  style: {width: '100%', fontWeight: 'bold', color: '#B22222', margin: '10px 0 0 0'},
  onClick: function() {
    print('Starting ML Pipeline...');
    var allFeatures = classInfo.map(function(info) {
      return drawingTools.layers().get(info.value).geometries().map(function(geom) {
        return ee.Feature(ee.Geometry(geom), {'class': info.value});
      });
    });
    var samples = ee.FeatureCollection(ee.List(allFeatures).flatten());
    if (samples.size().getInfo() === 0) { print('Error: No training data!'); return; }
    
    // Split Data (60% Train, 20% Val, 20% Test)
    var fc = samples.randomColumn('split');
    var training = fc.filter(ee.Filter.lt('split', 0.6));
    var validation = fc.filter(ee.Filter.and(ee.Filter.gte('split', 0.6), ee.Filter.lt('split', 0.8)));
    var testing = fc.filter(ee.Filter.gte('split', 0.8));

    // Train Models
    var classifier2014 = ee.Classifier.smileRandomForest(100).train({
      features: stack2014.sampleRegions({collection: training, properties: ['class'], scale: 10}),
      classProperty: 'class', inputProperties: stack2014.bandNames()
    });
    var classifier2020 = ee.Classifier.smileRandomForest(100).train({
      features: stack2020.sampleRegions({collection: training, properties: ['class'], scale: 10}),
      classProperty: 'class', inputProperties: stack2020.bandNames()
    });

    var map2014 = stack2014.classify(classifier2014);
    var map2020 = stack2020.classify(classifier2020);
    var paletteColors = classInfo.map(function(i){return i.color});
    
    Map.addLayer(map2014, {min: 0, max: 4, palette: paletteColors}, 'Classified 2014', false);
    Map.addLayer(map2020, {min: 0, max: 4, palette: paletteColors}, 'Classified 2020');

    // Print Metrics
    print('--- 2014 MODEL METRICS ---');
    print('Validation Accuracy:', stack2014.sampleRegions({collection: validation, properties: ['class'], scale: 10}).classify(classifier2014).errorMatrix('class', 'classification').accuracy());
    print('Test Accuracy:', stack2014.sampleRegions({collection: testing, properties: ['class'], scale: 10}).classify(classifier2014).errorMatrix('class', 'classification').accuracy());
    print('Test Confusion Matrix:', stack2014.sampleRegions({collection: testing, properties: ['class'], scale: 10}).classify(classifier2014).errorMatrix('class', 'classification'));

    print('--- 2020 MODEL METRICS ---');
    print('Validation Accuracy:', stack2020.sampleRegions({collection: validation, properties: ['class'], scale: 10}).classify(classifier2020).errorMatrix('class', 'classification').accuracy());
    print('Test Accuracy:', stack2020.sampleRegions({collection: testing, properties: ['class'], scale: 10}).classify(classifier2020).errorMatrix('class', 'classification').accuracy());
    print('Test Confusion Matrix:', stack2020.sampleRegions({collection: testing, properties: ['class'], scale: 10}).classify(classifier2020).errorMatrix('class', 'classification'));

    // Region Analysis computation
    if (regionPolygons.length === 0) { print('No region polygons found. Please provide geojson.'); return; }
    
    print('Computing region change metrics... Setting up Task and Console overview.');

    var pixelArea = ee.Image.pixelArea();
    var area2014 = pixelArea.addBands(map2014.rename('class'));
    var area2020 = pixelArea.addBands(map2020.rename('class'));

    var processRegion = function(feat) {
      var geom = feat.geometry();
      var dict14 = area2014.reduceRegion({reducer: ee.Reducer.sum().group({groupField: 1, groupName: 'class'}), geometry: geom, scale: 10, maxPixels: 1e9});
      var dict20 = area2020.reduceRegion({reducer: ee.Reducer.sum().group({groupField: 1, groupName: 'class'}), geometry: geom, scale: 10, maxPixels: 1e9});
      
      return ee.Feature(null, {
        'station_name': feat.get('station_name'),
        'area_2014': dict14.get('groups'),
        'area_2020': dict20.get('groups')
      });
    };

    var changeFC = regionPolygons.map(processRegion);

    // Provide High-Level Console Overview
    changeFC.evaluate(function(clientFC) {
      if(!clientFC || !clientFC.features) return;
      
      var maxChanges = { 0: {val: 0}, 1: {val: 0}, 2: {val: 0}, 3: {val: 0}, 4: {val: 0} };
      
      clientFC.features.forEach(function(f) {
        var name = f.properties.station_name;
        var a14 = f.properties.area_2014 || [];
        var a20 = f.properties.area_2020 || [];
        
        classInfo.forEach(function(cls) {
          var val14 = a14.find(function(g) { return g.class === cls.value; });
          var val20 = a20.find(function(g) { return g.class === cls.value; });
          
          var sum14 = val14 ? val14.sum : 0;
          var sum20 = val20 ? val20.sum : 0;
          var diff = Math.abs(sum20 - sum14);
          
          if (diff > maxChanges[cls.value].val) {
            maxChanges[cls.value] = {val: diff, station: name, dir: (sum20 > sum14) ? 'Increase' : 'Decrease'};
          }
        });
      });
      
      print('=== LARGEST CHANGE OVERVIEW ===');
      classInfo.forEach(function(cls) {
        var stat = maxChanges[cls.value];
        print(cls.name + ': ' + Math.round(stat.val).toLocaleString() + ' m² (' + stat.dir + ') at ' + stat.station);
      });
    });

    // Create an Export Task for the raw metrics (to avoid timeout)
    Export.table.toDrive({
      collection: changeFC,
      description: 'Charlotte_Light_Rail_LULC_Change_2014_2020',
      fileFormat: 'GeoJSON',
      fileNamePrefix: 'lulc_change_metrics'
    });
    print('Export Task prepared! Check the "Tasks" tab to run the full metrics download.');
  }
});

mainPanel.add(runButton);
Map.add(mainPanel);

// =====================================================
// 7. MAP ANNOTATIONS (Legend & Title)
// =====================================================
var legend = ui.Panel({
  style: { position: 'bottom-left', padding: '8px 15px', backgroundColor: 'white', border: '1px solid black' }
});

legend.add(ui.Label({value: 'Class Legend', style: {fontWeight: 'bold', fontSize: '16px', margin: '0 0 4px 0'}}));

classInfo.forEach(function(info) {
  var colorBox = ui.Label({style: {backgroundColor: info.color, padding: '8px', margin: '0 0 4px 0'}});
  var description = ui.Label({value: info.name, style: {margin: '0 0 4px 6px'}});
  legend.add(ui.Panel({widgets: [colorBox, description], layout: ui.Panel.Layout.Flow('horizontal')}));
});
Map.add(legend);

var titleBlock = ui.Panel({
  style: { position: 'bottom-right', padding: '10px', backgroundColor: 'white', border: '2px solid #333' },
  widgets: [
    ui.Label({value: 'Charlotte OBIA LULC Change', style: {fontWeight: 'bold', fontSize: '14px'}}),
    ui.Label({value: 'Comparing 2014 to 2020 across transit corridors', style: {fontSize: '11px', color: '#555'}})
  ]
});
Map.add(titleBlock);
