//USEUNIT DATABASE_RELATED
//USEUNIT ONENOTE_FUNCTIONALITY_TC
//USEUNIT SAMPLEAPP1_SECTION

function GetProcess()
{
    var objParent = null; 
    objParent = GetRecognitionObject(Sys,"TestedApp_PT", "Obj_TestedApp");
    return objParent;
}

