#include<iostream>
using namespace std;
int main(){
    int arr[3][2][2]= {{1,2,3,},{4,5,6},{7,8,9,8}};
    
    // output
    for(int i = 0;i <3;i++)
    {
        for(int j=0;j<3;j++)
        {
            for(int k =0;k<3;k++)
            {
                cout<<"Element in array:["<<i<<"]["<<j<<"]["<<k<<"]:";
                cout<<arr[i][j][k]<< endl;
            }
        }
    } 
}