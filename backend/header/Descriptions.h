#ifndef DESCRIPTIONS_H
#define DESCRIPTIONS_H

#include "SocialDescription.h"
#include "EducationDescription.h"
#include "ReferenceDescription.h"
#include "WorkDescription.h"
#include "LanguageDescription.h"

#include <vector>
using namespace std;

class UserDescriptions {
    private:
        vector<SocialDescription*> socialDescriptions;
        vector<EducationDescription*> educationDescriptions;
        vector<ReferenceDescription*> referenceDescriptions;
        vector<WorkDescription*> workDescriptions;
        vector<LanguageDescription*> languageDescriptions;
    public:
        UserDescriptions();
        ~UserDescriptions();
        void setWorkDescription(WorkDescription *w);
        vector<WorkDescription*> getWorkDescriptions();   

        void setSocialDescription(SocialDescription *s);
        vector<SocialDescription*> getSocialDescriptions();   

        void setEducationDescription(EducationDescription *e);
        vector<EducationDescription*> getEducationDescriptions();

        void setReferenceDescription(ReferenceDescription *r);
        vector<ReferenceDescription*> getReferenceDescriptions();

        void setLanguageDescription(LanguageDescription *l);
        vector<LanguageDescription*> getLanguageDescriptions();
};

#endif