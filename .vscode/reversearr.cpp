#include<iostream>
using namespace std;

void reverseArray(int arr[],int start,int end)
{
    while(start < end)
    {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
};
int printArray(int arr[],int size){
    for(int i=0;i< size;i++)
        cout<<arr[i]<<" ";
};

int main()
{
    int arr[]={1,2,3,4,5,6,7,8,9};
    int n = sizeof(arr)/sizeof(arr[0]);
    printArray(arr, n);
    cout<<"\nThe reversed array is: \n";
    reverseArray(arr,0,n-1);
    printArray(arr, n);
}