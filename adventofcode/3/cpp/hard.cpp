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

// #define find(x, n) find(all(x), n) != x.end()

#define suma(a, b) ((a % MOD) + (b $ MOD)) % MOD
#define resta(a, b) ((a % MOD) - (b $ MOD)) % MOD

//" \n"[i == n - 1]
using namespace std;

ll calc(string text)
{
  regex mul_regex(R"(mul\(\d{1,3},\d{1,3}\))");
  regex nums_regex(R"((\d{1,3}),(\d{1,3}))");
  sregex_iterator begin(text.begin(), text.end(), mul_regex);
  sregex_iterator end;

  vector<string> muls;

  ll r = 0;

  for (auto it = begin; it != end; ++it)
  {
    smatch match;
    string st = it->str();
    regex_search(st, match, nums_regex);

    ll result = stoi(match[1]) * stoi(match[2]);

    r += result;
  }

  return r;
}

int main()
{
  fast;

  string text = "do()";

  ifstream archivo("adventofcode/inputs/3.txt");

  while (!archivo.eof())
  {
    string line;
    getline(archivo, line);
    text += line;
  }

  string valid = "";

  size_t pos = 0;
  string delimiter = "don't()";
  string delimiterDo = "do()";
  while ((pos = text.find(delimiter)) != string::npos)
  {
    string subStr = text.substr(0, pos);

    size_t pos2 = subStr.find(delimiterDo);
    if (pos2 != string::npos)
      valid += subStr.substr(pos2);

    text.erase(0, pos + delimiter.length());
  }
  size_t pos2 = text.find(delimiterDo);
  if (pos2 != string::npos)
    valid += text.substr(pos2);

  cout << calc(valid) << endl;
}