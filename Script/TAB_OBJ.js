
//USEUNIT COMMON_OBJ
//USEUNIT DATABASE_RELATED
//USEUNIT MAINWND_OBJ
//USEUNIT ONENOTE_FUNCTIONALITY_TC
//USEUNIT SAMPLEAPP1_SECTION

function GetTabOption1()
{
    objChild = null; objParent = null; 
    var objParent = GetMainWindow();
    if(objParent != null)
    {
        var objChild = GetRecognitionObject(objParent, "TabOption", "Obj_TabOption1");
    }
    return objChild;
}

function GetTabOption2()
{
    objChild = null; objParent = null; 
    var objParent = GetMainWindow();
    if(objParent != null)
    {
        var objChild = GetRecognitionObject(objParent, "TabOption", "Obj_TabOption2");
    }
    return objChild;
}

