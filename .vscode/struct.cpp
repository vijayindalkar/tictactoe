// In C++ We can Initialize the Variables with Declaration in Structure.

#include <iostream>
using namespace std;

struct Point {
	int x ; // It is Considered as Default Arguments and no Error is Raised
	int y ;
};

int main()
{
	struct Point p1 = {50,40};

	// Accessing members of point p1
	// No value is Initialized then the default value is considered. ie x=0 and y=1;
	cout << "x = " << p1.x << ", y = " << p1.y<<endl;

	// Initializing the value of y = 20;
	p1.y = 20;
	cout << "x = " << p1.x << ", y = " << p1.y;
	return 0;
}
// This code is contributed by Samyak Jain
