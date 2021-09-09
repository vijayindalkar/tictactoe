#include<iostream>
using namespace std;
int main (){
    const char *colour[4]= {"Red","blue","silver","white"};
    // for displaying pointer using array
    for(int i = 0; i<4;i++)
    {
        cout<<colour[i]<<"\n";
    }
    return 0;
}