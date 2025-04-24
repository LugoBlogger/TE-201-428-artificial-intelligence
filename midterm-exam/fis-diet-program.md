Lingustic variables for a person
- $a$: age 
- $w$: weight (in BMI - Body Mass Index)
- $\ell$: daily level of physical activity 
- $c$: level of calories needed per day

The range of the linguistic values and its notation
age, $a$
| Linguistic value | Notation | Numerical range |
|------------------|----------|-----------------|
| Young            | Y        | [0, 40]         |
| Middle-aged      | M        | [35, 60]        |
| Old              | O        | [55, 70]        |
| Very Old         | VO       | [65, 100]       |

weight, $w$
| Linguistic value | Notation | Numerical range |
|------------------|----------|-----------------|
| Very Underweight | VU       | [0, 17]         |
| Underweight      | U        | [16.5, 18.5]    |
| Normal Weight    | N        | [18, 25]        |
| Overweight       | O        | [24.5, 27]      |
| Very Overweight  | VO       | [26.5, 50]      |

daily level of physical activity, $\ell$
| Linguistic value | Notation | Numerical range |
|------------------|----------|-----------------|
| Rest             | R        | [0, 4]          | 
| Light            | L        | [3, 5]          |
| Average          | A        | [4, 8]          |
| Heavy            | H        | [7, 9]          |
| Very Heavy       | VH       | [8, 12]         |

level of calories, $k$ (male)
| Linguistic value | Notation | Numerical range |
|------------------|----------|-----------------|
| Very Low         | VL       | [1000, 1500]    |
| Low              | L        | [1300, 2500]    |
| Normal           | N        | [2000, 2800]    |
| High             | H        | [2500, 3500]    |
| Very High        | VH       | [3000, 4500]    |   

level of calories, $k$ (female)
| Linguistic value | Notation | Numerical range |
|------------------|----------|-----------------|
| Very Low         | VL       | [500, 1200]     |
| Low              | L        | [1000, 2000]    |
| Normal           | N        | [1800, 2000]    |
| High             | H        | [1800, 2200]    |
| Very High        | VH       | [2100, 2500]    |   


There are 100 rules for defining fuzzy rules in diet program
for each male and female. 

Rule of inference for male
| no  | antecedents                        | consequent  |
|-----|------------------------------------|-------------|
|   1 | IF $a$.Y  AND $w$.VU AND $\ell$.R  | THEN $k$.L  |
|   2 | IF $a$.Y  AND $w$.VU AND $\ell$.L  | THEN $k$.N  |
|   3 | IF $a$.Y  AND $w$.VU AND $\ell$.A  | THEN $k$.N  |
|   4 | IF $a$.Y  AND $w$.VU AND $\ell$.H  | THEN $k$.H  |
|   5 | IF $a$.Y  AND $w$.VU AND $\ell$.VH | THEN $k$.N  |
|   6 | IF $a$.Y  AND $w$.U  AND $\ell$.R  | THEN $k$.L  |
|   7 | IF $a$.Y  AND $w$.U  AND $\ell$.L  | THEN $k$.N  |
|   8 | IF $a$.Y  AND $w$.U  AND $\ell$.A  | THEN $k$.H  |
|   9 | IF $a$.Y  AND $w$.U  AND $\ell$.H  | THEN $k$.H  |
|  10 | IF $a$.Y  AND $w$.U  AND $\ell$.VH | THEN $k$.H  |
|  11 | IF $a$.Y  AND $w$.N  AND $\ell$.R  | THEN $k$.L  |
|  12 | IF $a$.Y  AND $w$.N  AND $\ell$.L  | THEN $k$.N  |
|  13 | IF $a$.Y  AND $w$.N  AND $\ell$.A  | THEN $k$.N  |
|  14 | IF $a$.Y  AND $w$.N  AND $\ell$.H  | THEN $k$.H  |
|  15 | IF $a$.Y  AND $w$.N  AND $\ell$.VH | THEN $k$.H  |
|  16 | IF $a$.Y  AND $w$.O  AND $\ell$.R  | THEN $k$.N  |
|  17 | IF $a$.Y  AND $w$.O  AND $\ell$.L  | THEN $k$.H  |
|  18 | IF $a$.Y  AND $w$.O  AND $\ell$.A  | THEN $k$.H  |
|  19 | IF $a$.Y  AND $w$.O  AND $\ell$.H  | THEN $k$.VH |
|  20 | IF $a$.Y  AND $w$.O  AND $\ell$.VH | THEN $k$.VH |
|  21 | IF $a$.Y  AND $w$.VO AND $\ell$.R  | THEN $k$.N  |
|  22 | IF $a$.Y  AND $w$.VO AND $\ell$.L  | THEN $k$.H  |
|  23 | IF $a$.Y  AND $w$.VO AND $\ell$.A  | THEN $k$.VH |
|  24 | IF $a$.Y  AND $w$.VO AND $\ell$.H  | THEN $k$.VH |
|  25 | IF $a$.Y  AND $w$.VO AND $\ell$.VH | THEN $k$.VH |
|  26 | IF $a$.M  AND $w$.VU AND $\ell$.R  | THEN $k$.L  |
|  27 | IF $a$.M  AND $w$.VU AND $\ell$.L  | THEN $k$.L  |
|  28 | IF $a$.M  AND $w$.VU AND $\ell$.A  | THEN $k$.N  |
|  29 | IF $a$.M  AND $w$.VU AND $\ell$.H  | THEN $k$.N  |
|  30 | IF $a$.M  AND $w$.VU AND $\ell$.VH | THEN $k$.N  |
|  31 | IF $a$.M  AND $w$.U  AND $\ell$.R  | THEN $k$.L  |
|  32 | IF $a$.M  AND $w$.U  AND $\ell$.L  | THEN $k$.N  |
|  33 | IF $a$.M  AND $w$.U  AND $\ell$.A  | THEN $k$.N  |
|  34 | IF $a$.M  AND $w$.U  AND $\ell$.H  | THEN $k$.H  |
|  35 | IF $a$.M  AND $w$.U  AND $\ell$.VH | THEN $k$.H  |
|  36 | IF $a$.M  AND $w$.N  AND $\ell$.R  | THEN $k$.L  |
|  37 | IF $a$.M  AND $w$.N  AND $\ell$.L  | THEN $k$.N  |
|  38 | IF $a$.M  AND $w$.N  AND $\ell$.A  | THEN $k$.N  |
|  39 | IF $a$.M  AND $w$.N  AND $\ell$.H  | THEN $k$.H  |
|  40 | IF $a$.M  AND $w$.N  AND $\ell$.VH | THEN $k$.N  |
|  41 | IF $a$.M  AND $w$.O  AND $\ell$.R  | THEN $k$.N  |
|  42 | IF $a$.M  AND $w$.O  AND $\ell$.L  | THEN $k$.H  |
|  43 | IF $a$.M  AND $w$.O  AND $\ell$.A  | THEN $k$.H  |
|  44 | IF $a$.M  AND $w$.O  AND $\ell$.H  | THEN $k$.VH |
|  45 | IF $a$.M  AND $w$.O  AND $\ell$.VH | THEN $k$.VH |
|  46 | IF $a$.M  AND $w$.VO AND $\ell$.R  | THEN $k$.N  |
|  47 | IF $a$.M  AND $w$.VO AND $\ell$.L  | THEN $k$.H  |
|  48 | IF $a$.M  AND $w$.VO AND $\ell$.A  | THEN $k$.VH |
|  49 | IF $a$.M  AND $w$.VO AND $\ell$.H  | THEN $k$.VH |
|  50 | IF $a$.M  AND $w$.VO AND $\ell$.VH | THEN $k$.VH |
|  51 | IF $a$.O  AND $w$.VU AND $\ell$.R  | THEN $k$.VL |
|  52 | IF $a$.O  AND $w$.VU AND $\ell$.L  | THEN $k$.L  |
|  53 | IF $a$.O  AND $w$.VU AND $\ell$.A  | THEN $k$.L  |
|  54 | IF $a$.O  AND $w$.VU AND $\ell$.H  | THEN $k$.N  |
|  55 | IF $a$.O  AND $w$.VU AND $\ell$.VH | THEN $k$.L  |
|  56 | IF $a$.O  AND $w$.U  AND $\ell$.R  | THEN $k$.L  |
|  57 | IF $a$.O  AND $w$.U  AND $\ell$.L  | THEN $k$.L  |
|  58 | IF $a$.O  AND $w$.U  AND $\ell$.A  | THEN $k$.N  |
|  59 | IF $a$.O  AND $w$.U  AND $\ell$.H  | THEN $k$.N  |
|  60 | IF $a$.O  AND $w$.U  AND $\ell$.VH | THEN $k$.N  |
|  61 | IF $a$.O  AND $w$.N  AND $\ell$.R  | THEN $k$.VL |
|  62 | IF $a$.O  AND $w$.N  AND $\ell$.L  | THEN $k$.L  |
|  63 | IF $a$.O  AND $w$.N  AND $\ell$.A  | THEN $k$.L  |
|  64 | IF $a$.O  AND $w$.N  AND $\ell$.H  | THEN $k$.N  |
|  65 | IF $a$.O  AND $w$.N  AND $\ell$.VH | THEN $k$.N  |
|  66 | IF $a$.O  AND $w$.O  AND $\ell$.R  | THEN $k$.L  |
|  67 | IF $a$.O  AND $w$.O  AND $\ell$.L  | THEN $k$.N  |
|  68 | IF $a$.O  AND $w$.O  AND $\ell$.A  | THEN $k$.N  |
|  69 | IF $a$.O  AND $w$.O  AND $\ell$.H  | THEN $k$.H  |
|  70 | IF $a$.O  AND $w$.O  AND $\ell$.VH | THEN $k$.H  |
|  71 | IF $a$.O  AND $w$.VO AND $\ell$.R  | THEN $k$.N  |
|  72 | IF $a$.O  AND $w$.VO AND $\ell$.L  | THEN $k$.H  |
|  73 | IF $a$.O  AND $w$.VO AND $\ell$.A  | THEN $k$.H  |
|  74 | IF $a$.O  AND $w$.VO AND $\ell$.H  | THEN $k$.VH |
|  75 | IF $a$.O  AND $w$.VO AND $\ell$.VH | THEN $k$.VH |
|  76 | IF $a$.VO AND $w$.VU AND $\ell$.R  | THEN $k$.VL |
|  77 | IF $a$.VO AND $w$.VU AND $\ell$.L  | THEN $k$.L  |
|  78 | IF $a$.VO AND $w$.VU AND $\ell$.A  | THEN $k$.L  |
|  79 | IF $a$.VO AND $w$.VU AND $\ell$.H  | THEN $k$.L  |
|  80 | IF $a$.VO AND $w$.VU AND $\ell$.VH | THEN $k$.L  |
|  81 | IF $a$.VO AND $w$.U  AND $\ell$.R  | THEN $k$.L  |
|  82 | IF $a$.VO AND $w$.U  AND $\ell$.L  | THEN $k$.L  |
|  83 | IF $a$.VO AND $w$.U  AND $\ell$.A  | THEN $k$.L  |
|  84 | IF $a$.VO AND $w$.U  AND $\ell$.H  | THEN $k$.N  |
|  85 | IF $a$.VO AND $w$.U  AND $\ell$.VH | THEN $k$.N  |
|  86 | IF $a$.VO AND $w$.N  AND $\ell$.R  | THEN $k$.VL |
|  87 | IF $a$.VO AND $w$.N  AND $\ell$.L  | THEN $k$.L  |
|  88 | IF $a$.VO AND $w$.N  AND $\ell$.A  | THEN $k$.L  |
|  89 | IF $a$.VO AND $w$.N  AND $\ell$.H  | THEN $k$.N  |
|  90 | IF $a$.VO AND $w$.N  AND $\ell$.VH | THEN $k$.N  |
|  91 | IF $a$.VO AND $w$.O  AND $\ell$.R  | THEN $k$.L  |
|  92 | IF $a$.VO AND $w$.O  AND $\ell$.L  | THEN $k$.N  |
|  93 | IF $a$.VO AND $w$.O  AND $\ell$.A  | THEN $k$.N  |
|  94 | IF $a$.VO AND $w$.O  AND $\ell$.H  | THEN $k$.H  |
|  95 | IF $a$.VO AND $w$.O  AND $\ell$.VH | THEN $k$.H  |
|  96 | IF $a$.VO AND $w$.VO AND $\ell$.R  | THEN $k$.N  |
|  97 | IF $a$.VO AND $w$.VO AND $\ell$.L  | THEN $k$.H  |
|  98 | IF $a$.VO AND $w$.VO AND $\ell$.A  | THEN $k$.H  |
|  99 | IF $a$.VO AND $w$.VO AND $\ell$.H  | THEN $k$.VH |
| 100 | IF $a$.VO AND $w$.VO AND $\ell$.VH | THEN $k$.VH |

Rule of inference for female
| no  | antecedents                        | consequent  |
|-----|------------------------------------|-------------|
|   1 | IF $a$.Y  AND $w$.VU AND $\ell$.R  | THEN $k$.VL |
|   2 | IF $a$.Y  AND $w$.VU AND $\ell$.L  | THEN $k$.VL |
|   3 | IF $a$.Y  AND $w$.VU AND $\ell$.A  | THEN $k$.VL |
|   4 | IF $a$.Y  AND $w$.VU AND $\ell$.H  | THEN $k$.L  |
|   5 | IF $a$.Y  AND $w$.VU AND $\ell$.VH | THEN $k$.L  |
|   6 | IF $a$.Y  AND $w$.U  AND $\ell$.R  | THEN $k$.VL |
|   7 | IF $a$.Y  AND $w$.U  AND $\ell$.L  | THEN $k$.L  |
|   8 | IF $a$.Y  AND $w$.U  AND $\ell$.A  | THEN $k$.L  |
|   9 | IF $a$.Y  AND $w$.U  AND $\ell$.H  | THEN $k$.L  |
|  10 | IF $a$.Y  AND $w$.U  AND $\ell$.VH | THEN $k$.L  |
|  11 | IF $a$.Y  AND $w$.N  AND $\ell$.R  | THEN $k$.VL |
|  12 | IF $a$.Y  AND $w$.N  AND $\ell$.L  | THEN $k$.L  |
|  13 | IF $a$.Y  AND $w$.N  AND $\ell$.A  | THEN $k$.L  |
|  14 | IF $a$.Y  AND $w$.N  AND $\ell$.H  | THEN $k$.L  |
|  15 | IF $a$.Y  AND $w$.N  AND $\ell$.VH | THEN $k$.L  |
|  16 | IF $a$.Y  AND $w$.O  AND $\ell$.R  | THEN $k$.L  |
|  17 | IF $a$.Y  AND $w$.O  AND $\ell$.L  | THEN $k$.L  |
|  18 | IF $a$.Y  AND $w$.O  AND $\ell$.A  | THEN $k$.L  |
|  19 | IF $a$.Y  AND $w$.O  AND $\ell$.H  | THEN $k$.H  |
|  20 | IF $a$.Y  AND $w$.O  AND $\ell$.VH | THEN $k$.H  |
|  21 | IF $a$.Y  AND $w$.VO AND $\ell$.R  | THEN $k$.L  |
|  22 | IF $a$.Y  AND $w$.VO AND $\ell$.L  | THEN $k$.N  |
|  23 | IF $a$.Y  AND $w$.VO AND $\ell$.A  | THEN $k$.N  |
|  24 | IF $a$.Y  AND $w$.VO AND $\ell$.H  | THEN $k$.VH |
|  25 | IF $a$.Y  AND $w$.VO AND $\ell$.VH | THEN $k$.VH |
|  26 | IF $a$.M  AND $w$.VU AND $\ell$.R  | THEN $k$.VL |
|  27 | IF $a$.M  AND $w$.VU AND $\ell$.L  | THEN $k$.VL |
|  28 | IF $a$.M  AND $w$.VU AND $\ell$.A  | THEN $k$.VL |
|  29 | IF $a$.M  AND $w$.VU AND $\ell$.H  | THEN $k$.L  |
|  30 | IF $a$.M  AND $w$.VU AND $\ell$.VH | THEN $k$.L  |
|  31 | IF $a$.M  AND $w$.U  AND $\ell$.R  | THEN $k$.VL |
|  32 | IF $a$.M  AND $w$.U  AND $\ell$.L  | THEN $k$.L  |
|  33 | IF $a$.M  AND $w$.U  AND $\ell$.A  | THEN $k$.L  |
|  34 | IF $a$.M  AND $w$.U  AND $\ell$.H  | THEN $k$.L  |
|  35 | IF $a$.M  AND $w$.U  AND $\ell$.VH | THEN $k$.L  |
|  36 | IF $a$.M  AND $w$.N  AND $\ell$.R  | THEN $k$.VL |
|  37 | IF $a$.M  AND $w$.N  AND $\ell$.L  | THEN $k$.VL |
|  38 | IF $a$.M  AND $w$.N  AND $\ell$.A  | THEN $k$.L  |
|  39 | IF $a$.M  AND $w$.N  AND $\ell$.H  | THEN $k$.L  |
|  40 | IF $a$.M  AND $w$.N  AND $\ell$.VH | THEN $k$.L  |
|  41 | IF $a$.M  AND $w$.O  AND $\ell$.R  | THEN $k$.L  |
|  42 | IF $a$.M  AND $w$.O  AND $\ell$.L  | THEN $k$.L  |
|  43 | IF $a$.M  AND $w$.O  AND $\ell$.A  | THEN $k$.L  |
|  44 | IF $a$.M  AND $w$.O  AND $\ell$.H  | THEN $k$.N  |
|  45 | IF $a$.M  AND $w$.O  AND $\ell$.VH | THEN $k$.N  |
|  46 | IF $a$.M  AND $w$.VO AND $\ell$.R  | THEN $k$.L  |
|  47 | IF $a$.M  AND $w$.VO AND $\ell$.L  | THEN $k$.L  |
|  48 | IF $a$.M  AND $w$.VO AND $\ell$.A  | THEN $k$.N  |
|  49 | IF $a$.M  AND $w$.VO AND $\ell$.H  | THEN $k$.VH |
|  50 | IF $a$.M  AND $w$.VO AND $\ell$.VH | THEN $k$.VH |
|  51 | IF $a$.O  AND $w$.VU AND $\ell$.R  | THEN $k$.VL |
|  52 | IF $a$.O  AND $w$.VU AND $\ell$.L  | THEN $k$.VL |
|  53 | IF $a$.O  AND $w$.VU AND $\ell$.A  | THEN $k$.VL |
|  54 | IF $a$.O  AND $w$.VU AND $\ell$.H  | THEN $k$.VL |
|  55 | IF $a$.O  AND $w$.VU AND $\ell$.VH | THEN $k$.VL |
|  56 | IF $a$.O  AND $w$.U  AND $\ell$.R  | THEN $k$.VL |
|  57 | IF $a$.O  AND $w$.U  AND $\ell$.L  | THEN $k$.VL |
|  58 | IF $a$.O  AND $w$.U  AND $\ell$.A  | THEN $k$.VL |
|  59 | IF $a$.O  AND $w$.U  AND $\ell$.H  | THEN $k$.L  |
|  60 | IF $a$.O  AND $w$.U  AND $\ell$.VH | THEN $k$.L  |
|  61 | IF $a$.O  AND $w$.N  AND $\ell$.R  | THEN $k$.VL |
|  62 | IF $a$.O  AND $w$.N  AND $\ell$.L  | THEN $k$.VL |
|  63 | IF $a$.O  AND $w$.N  AND $\ell$.A  | THEN $k$.VL |
|  64 | IF $a$.O  AND $w$.N  AND $\ell$.H  | THEN $k$.VL |
|  65 | IF $a$.O  AND $w$.N  AND $\ell$.VH | THEN $k$.VL |
|  66 | IF $a$.O  AND $w$.O  AND $\ell$.R  | THEN $k$.VL |
|  67 | IF $a$.O  AND $w$.O  AND $\ell$.L  | THEN $k$.L  |
|  68 | IF $a$.O  AND $w$.O  AND $\ell$.A  | THEN $k$.L  |
|  69 | IF $a$.O  AND $w$.O  AND $\ell$.H  | THEN $k$.L  |
|  70 | IF $a$.O  AND $w$.O  AND $\ell$.VH | THEN $k$.L  |
|  71 | IF $a$.O  AND $w$.VO AND $\ell$.R  | THEN $k$.L  |
|  72 | IF $a$.O  AND $w$.VO AND $\ell$.L  | THEN $k$.L  |
|  73 | IF $a$.O  AND $w$.VO AND $\ell$.A  | THEN $k$.L  |
|  74 | IF $a$.O  AND $w$.VO AND $\ell$.H  | THEN $k$.N  |
|  75 | IF $a$.O  AND $w$.VO AND $\ell$.VH | THEN $k$.N  |
|  76 | IF $a$.VO AND $w$.VU AND $\ell$.R  | THEN $k$.VL |
|  77 | IF $a$.VO AND $w$.VU AND $\ell$.L  | THEN $k$.VL |
|  78 | IF $a$.VO AND $w$.VU AND $\ell$.A  | THEN $k$.VL |
|  79 | IF $a$.VO AND $w$.VU AND $\ell$.H  | THEN $k$.VL |
|  80 | IF $a$.VO AND $w$.VU AND $\ell$.VH | THEN $k$.VL |
|  81 | IF $a$.VO AND $w$.U  AND $\ell$.R  | THEN $k$.VL |
|  82 | IF $a$.VO AND $w$.U  AND $\ell$.L  | THEN $k$.VL |
|  83 | IF $a$.VO AND $w$.U  AND $\ell$.A  | THEN $k$.VL |
|  84 | IF $a$.VO AND $w$.U  AND $\ell$.H  | THEN $k$.VL |
|  85 | IF $a$.VO AND $w$.U  AND $\ell$.VH | THEN $k$.VL |
|  86 | IF $a$.VO AND $w$.N  AND $\ell$.R  | THEN $k$.VL |
|  87 | IF $a$.VO AND $w$.N  AND $\ell$.L  | THEN $k$.VL |
|  88 | IF $a$.VO AND $w$.N  AND $\ell$.A  | THEN $k$.VL |
|  89 | IF $a$.VO AND $w$.N  AND $\ell$.H  | THEN $k$.VL |
|  90 | IF $a$.VO AND $w$.N  AND $\ell$.VH | THEN $k$.VL |
|  91 | IF $a$.VO AND $w$.O  AND $\ell$.R  | THEN $k$.VL |
|  92 | IF $a$.VO AND $w$.O  AND $\ell$.L  | THEN $k$.L  |
|  93 | IF $a$.VO AND $w$.O  AND $\ell$.A  | THEN $k$.L  |
|  94 | IF $a$.VO AND $w$.O  AND $\ell$.H  | THEN $k$.L  |
|  95 | IF $a$.VO AND $w$.O  AND $\ell$.VH | THEN $k$.L  |
|  96 | IF $a$.VO AND $w$.VO AND $\ell$.R  | THEN $k$.L  |
|  97 | IF $a$.VO AND $w$.VO AND $\ell$.L  | THEN $k$.L  |
|  98 | IF $a$.VO AND $w$.VO AND $\ell$.A  | THEN $k$.L  |
|  99 | IF $a$.VO AND $w$.VO AND $\ell$.H  | THEN $k$.N  |
| 100 | IF $a$.VO AND $w$.VO AND $\ell$.VH | THEN $k$.N  |
