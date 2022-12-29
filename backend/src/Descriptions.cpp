#include "../header/Descriptions.h"

UserDescriptions::UserDescriptions(){
    socialDescriptions;
    educationDescriptions;
    referenceDescriptions;
    workDescriptions;
    languageDescriptions;
}

UserDescriptions::~UserDescriptions(){
    for(int i = 0; i < socialDescriptions.size(); i++){
        SocialDescription *s = socialDescriptions[i];
        delete s;
    }
    for(int a = 0; a < educationDescriptions.size(); a++){
        EducationDescription *e = educationDescriptions[a];
        delete e;
    }
    for(int b = 0; b < referenceDescriptions.size(); b++){
        ReferenceDescription *r = referenceDescriptions[b];
        delete r;
    }
    for(int c = 0; c < workDescriptions.size(); c++){
        WorkDescription *w = workDescriptions[c];
        delete w;
    }
    for(int d = 0; d < languageDescriptions.size(); d++){
        LanguageDescription *l = languageDescriptions[d];
        delete l;
    }
}

//updated

void UserDescriptions::setWorkDescription(WorkDescription *w){
    workDescriptions.push_back(w);
}
vector<WorkDescription*> UserDescriptions::getWorkDescriptions(){
    return workDescriptions;
}

void UserDescriptions::setSocialDescription(SocialDescription *s){
    socialDescriptions.push_back(s);
}
vector<SocialDescription*> UserDescriptions::getSocialDescriptions(){
    return socialDescriptions;
}  

void UserDescriptions::setEducationDescription(EducationDescription *e){

    educationDescriptions.push_back(e);

}
vector<EducationDescription*> UserDescriptions::getEducationDescriptions(){
    return educationDescriptions;
}

void UserDescriptions::setReferenceDescription(ReferenceDescription *r){
    referenceDescriptions.push_back(r);
}
vector<ReferenceDescription*> UserDescriptions::getReferenceDescriptions(){
    return referenceDescriptions;
}

void UserDescriptions::setLanguageDescription(LanguageDescription *l){
    languageDescriptions.push_back(l);
}
vector<LanguageDescription*> UserDescriptions::getLanguageDescriptions(){
    return languageDescriptions;
}



