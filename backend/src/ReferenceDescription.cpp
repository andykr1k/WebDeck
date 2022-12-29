#include "../header/ReferenceDescription.h"

#include <string>
#include <iostream>
using namespace std;


ReferenceDescription::ReferenceDescription(){
    refName = "";
    role = "";
    company = "";
}

void ReferenceDescription::setRefName(string s){
    refName = s;
}

string ReferenceDescription::getRefName(){
    return refName;
}
void ReferenceDescription::setRole(string r){
    role = r;
}
string ReferenceDescription::getRole(){
    return role;
}
void ReferenceDescription::setCompany(string c) {
    company = c;
}
string ReferenceDescription::getCompany(){
    return company;
}
