// wrong program
#include<iostream>
using namespace std;

struct Pair{
  int min;
  int max;
};

struct Pair getMinMax(int a[],int n)
{
    struct Pair MinMax;
    int i;
    
    if(n == 1)
    {
        MinMax.min = a[0];
        MinMax.max= a[0];
        return MinMax;
    }
    if(a[0]>a[1])
    {
        MinMax.min = a[1];
        MinMax.max = a[0];
    }
    else
    {
        MinMax.min = a[0];
        MinMax.max = a[1];
    }
    
    for(i = 2;i<n; i++)
    {
        if(a[i]> MinMax.max)
            MinMax.max = a[i];
        else if(a[i]< MinMax.min)
            MinMax.min = a[i];
        }
        return MinMax;
}

int main(){
    int a[]= {9,9,9,9,9,9,1};
    int n = sizeof(a)/sizeof(a[0]);
    struct Pair MinMax = getMinMax(a,n);
    cout<<"Max no. is:"<<MinMax.max<<"\nMin no. is:"<<MinMax.min;
}