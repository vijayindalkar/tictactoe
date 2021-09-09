#include<iostream>
using namespace std;
#define N 2
void multiplyarr(int arr[][N],int arr1[][N],int arr2[][N])
{   
    int i,j,k;
    for(i=0;i<N;i++){
        for(j=0;j<N;j++){
            arr2[i][j]= 0;
            for(k=0;k<N;k++)
            arr2[i][j] += arr[i][k] * arr1[k][j];
        }
    }
}

int main(){
    int i,j;
    int arr2[N][N];
    int arr[N][N]={{1,1},{1,1}};
    int arr1[N][N]={{1,1},{1,1}};
     multiplyarr(arr,arr1,arr2);
    cout<<"Array is ";
    for(i = 0; i<N ; i++){
        for(j=0;j<N; j++)
        cout<< arr2[i][j]<<" ";
        cout<<"\n";
    }
        return 0;
}