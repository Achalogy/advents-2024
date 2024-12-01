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

int main()
{
  fast;

  ifstream archivo("adventofcode/inputs/1.txt");

  vector<ll> l, r;

  while (!archivo.eof())
  {
    int a;
    archivo >> a;
    l.push_back(a);
    archivo >> a;
    r.push_back(a);
  }

  vector<int> ocurrencies(10e8, 0);

  for(int i: r) {
    ocurrencies[i]++;
  }

  ll response = 0;

  for (int i: l)
  {
    response += i * ocurrencies[i];
  }

  cout << response << endl;

  return 0;
}