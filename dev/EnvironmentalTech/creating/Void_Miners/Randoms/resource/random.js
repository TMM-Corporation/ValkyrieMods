//список рандома
var vrm_random_clear = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];

var vrm_random_black = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 6.49, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_red = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 8.21, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 6.47, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 8.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 5.47, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_green = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 6.82, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 6.82, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 5.77, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_brown = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 7.71, id: 3, meta: 0},//brown 7.71
  {chance: 6.47, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 7.21, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 5.47, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_blue = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 6.49, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_purple = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 6.69, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 6.56, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 5.77, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_cyan = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 6.49, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_light_gray = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 9.45, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 7.09, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 5.77, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_gray = [
  {chance: 8.75, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 8.51, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 8.27, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 5.2, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_pink = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 10.0, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 6.11, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_lime = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 6.49, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_yellow = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 8.51, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 6.15, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 6.5, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 5.2, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 8.27, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_light_blue = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 6.11, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 6.94, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_magenta = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 6.49, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_orange = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 7.5, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 6.11, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_white = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 9.45, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 5.77, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 5.77, id: BlockID.mica, meta: 0},//white 5.77
];
