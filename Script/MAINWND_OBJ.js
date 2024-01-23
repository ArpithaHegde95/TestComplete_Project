//USEUNIT COMMON_OBJ
//USEUNIT DATABASE_RELATED
//USEUNIT ONENOTE_FUNCTIONALITY_TC
//USEUNIT SAMPLEAPP1_SECTION

function GetMainWindow()
{
    objChild = null; objParent = null; 
    var objParent = GetProcess();
    if(objParent != null)
    {
        var objChild = GetRecognitionObject(objParent, "MainWindow", "Obj_MainWindow");
    }
    return objChild;
}

