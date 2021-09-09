#include<iostream>
using namespace std;

int lagrer(int arr[],int n)
{
    int max = arr[0];
    for(int i = 0; i < n; i++)
        if(arr[i]> max)
        max = arr[i];
    return max;
}

int main(){
    int arrw[]= {741,852,963,147,258,369,987,6545,321,4413};
    int n = sizeof(arrw)/sizeof(arrw[0]);
    cout<<lagrer(arrw,n);
    return 0;
}