#include<iostream>
using namespace std;

void bubblesort(int arr[],int n)
{
    for(int i=0;i<n-1;i++) // For no. of pass 
    {
        for(int j =0;j<n-1-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                int temp;
                temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]= temp;
            }
        }
    }return;
};
void printArray(int arr[],int n)
{
    for(int i = 0;i<n;i++)
    cout<<arr[i]<<" ";
};

int main(){
    int arr[]={7,1,8,9,45,298,4,5,17};
    int n = 9;
    bubblesort(arr,n);
    printArray(arr,n);

}