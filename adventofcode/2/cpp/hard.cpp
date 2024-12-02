#include <bits/stdc++.h>

typedef long long ll;
typedef unsigned long long ull;
#define endl '\n'
#define fast                    \
  ios_base::sync_with_stdio(0); \
  cin.tie(0);

#define forn(i, n) for (int i = 0; i < n; i++)
#define fornm(i, n, m) for (int i = n; i <= m; i++)
#define rforn(in, n) for (int i = n - 1; i >= 0; i--)

#define all(x) x.begin(), x.end()
#define len(x) int(x.size())

#define ms(x, n) memset(x, n, sizeof(x))

#define find(x, n) find(all(x), n) != x.end()

#define suma(a, b) ((a % MOD) + (b $ MOD)) % MOD
#define resta(a, b) ((a % MOD) - (b $ MOD)) % MOD

//" \n"[i == n - 1]
using namespace std;

bool checkSafe(vector<int> report)
{
  bool safe = true;
  bool increase = report[0] < report[1];

  for (int i = 0; i < len(report) - 1; i++)
  {
    int diff = abs(report[i] - report[i + 1]);

    if (increase && report[i] > report[i + 1])
    {
      safe = false;
      break;
    }
    else if (!increase && report[i] < report[i + 1])
    {
      safe = false;
      break;
    }
    else if (diff < 1 || diff > 3)
    {
      safe = false;
      break;
    }
  }

  return safe;
}

int main()
{
  fast;

  ifstream archivo("adventofcode/inputs/2.txt");
  int safeCount = 0;

  while (!archivo.eof())
  {
    string line;
    getline(archivo, line);
    char str[len(line) + 1];
    strcpy(str, line.c_str());
    str[len(line)] = '\0';

    char *token = strtok(str, " ");

    vector<int> report;

    while (token != NULL)
    {
      report.push_back(atoi(token));
      token = strtok(NULL, " ");
    }

    queue<vector<int>> q;
    q.push(report);
    forn(i, len(report)) {
      vector<int> r;
      forn(j, len(report)) {
        if(i != j) r.push_back(report[j]);
      }
      q.push(r);
    }

    while(!q.empty()) {
      if(checkSafe(q.front())) {
        safeCount++;
        break;
      }
      q.pop();
    }
  }
  cout << safeCount << endl;

  return 0;
}