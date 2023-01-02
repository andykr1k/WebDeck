#ifndef REFERENCEDESCRIPTION_H
#define REFERENCEDESCRPITION_H

#include <string>
#include <iostream>
using namespace std;

class ReferenceDescription{
    private:
        string refName;
        string role;
        string company;
    public:
        ReferenceDescription();
        void setRefName(string s);
        string getRefName();
        void setRole(string r);
        string getRole();
        void setCompany(string c);
        string getCompany();
};
#endif