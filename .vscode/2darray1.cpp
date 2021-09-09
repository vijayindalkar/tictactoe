#include<iostream>
using namespace std;

int main(){
    int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};
    // output
    for(int i = 0;i<3;i++)
    {
        for(int j = 0;j<3; j++)
        {
            cout<<"Element in array ["<<i<<"]["<<j<<"]:";
            cout<< arr[i][j]<<endl;
        }
    }
}