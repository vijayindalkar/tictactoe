#include<iostream>
using namespace std;
// Linear Search program 
int LinearSearch(int arr[],int size,int element)
{
    for (int i = 0;i < size; i++)
    {
        if(arr[i] == element){
            return i;
        }
    }return -1;

};
// Binary Search Program
int binarySearch(int arr[], int size, int element)
{
    int low,mid,high;
    high = size -1;
    low = 0;
    while(low <= high)
    {
        mid = (high + low)/2;
        if(arr[mid]== element)
           { 
               return mid;
           }
           if(arr[mid]< element)
            {
             low = mid + 1;   
            }
        else
            {
            high = mid - 1;
            }
    }return -1;
};




// driver Code
int main()
{
    // sorted array for binary search
    int arr[]={1,51,91,152,754,924,1456,1756,2145,2365,2879,2987,3698,6125};
    // Unsorted array for binary search
    // int arr[]={1,5,9,7,4,8,6125,5889,41,57845,669512,45,55,5412,1156,564,456,651};
    int size = sizeof(arr)/sizeof(int);
    int element;
    cin>>element;
    int searchIndex = binarySearch(arr,size,element);
    cout<<"The Element "<<element<<" was found at "<<searchIndex;
}