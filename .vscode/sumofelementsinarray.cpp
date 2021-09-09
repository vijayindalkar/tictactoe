/* 
#include<iostream>
using namespace std;

int main(){
    int a[6]={2,3,4,5,6,7}, suma = 0;
    // itrate array and add in sum 
    for(int i = 0; i<6;i++){
        suma += a[i];
    }
    cout<< "Sum of array is "<< suma;
}

*/

#include<iostream>
using namespace std;

int sum(int a[],int n = 0)
{
    int sum = 0 ;
    for(int i=0;i<n ;i++)
    sum += a[i];

    return sum;
}

int main()
{
    int arr[]={12,45,78};
    int n = sizeof(arr)/sizeof(arr[0]);
    cout<<"sum of given array is "<<sum(arr,n);

    return 0;
}