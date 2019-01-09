// ocxProject.cpp : Implementation of COcxProjectApp and DLL registration.

#include <afx.h>
#include "StdAfx.h"
#include "ocxProject.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif


COcxProjectApp NEAR theApp;

const GUID CDECL BASED_CODE _tlid =
		{ 0xbcbb04f6, 0x920a, 0x4b20, { 0x89, 0x54, 0x35, 0xff, 0x91, 0x71, 0xcd, 0xa9 } };
const WORD _wVerMajor = 1;
const WORD _wVerMinor = 0;


////////////////////////////////////////////////////////////////////////////
// COcxProjectApp::InitInstance - DLL initialization

BOOL COcxProjectApp::InitInstance()
{
	BOOL bInit = COleControlModule::InitInstance();

	if (bInit)
	{
		// TODO: Add your own module initialization code here.
	}

	return bInit;
}


////////////////////////////////////////////////////////////////////////////
// COcxProjectApp::ExitInstance - DLL termination

int COcxProjectApp::ExitInstance()
{
	// TODO: Add your own module termination code here.

	return COleControlModule::ExitInstance();
}

//  ע���������     
HRESULT RegisterCLSIDInCategory(REFCLSID clsid, CATID catid)
 {    
     //  Register your component categories information.     
    ICatRegister *  pcr  =  NULL ;    
    HRESULT hr  =  S_OK ;    
    hr  = CoCreateInstance(CLSID_StdComponentCategoriesMgr, NULL, CLSCTX_INPROC_SERVER, IID_ICatRegister, (void ** ) & pcr);    
     if  (SUCCEEDED(hr)) {    
       //  Register this category as being "implemented" by the class.     
      CATID rgcatid[ 1 ];    
      rgcatid[ 0 ]  =  catid;    
      hr  =  pcr -> RegisterClassImplCategories(clsid,  1 , rgcatid);    
    }    
     if  (pcr  !=  NULL) pcr -> Release();    
     return  hr;    
}    
//  ж���������     
HRESULT UnRegisterCLSIDInCategory(REFCLSID clsid, CATID catid)
 {    
    ICatRegister *  pcr  =  NULL ;    
    HRESULT hr  =  S_OK ;    
    hr  =  CoCreateInstance(CLSID_StdComponentCategoriesMgr,    
            NULL, CLSCTX_INPROC_SERVER, IID_ICatRegister, ( void ** ) & pcr);    
     if  (SUCCEEDED(hr)) {    
       //  Unregister this category as being "implemented" by the class.     
      CATID rgcatid[ 1 ] ;    
      rgcatid[ 0 ]  =  catid;    
      hr  =  pcr -> UnRegisterClassImplCategories(clsid,  1 , rgcatid);    
    }    
     if  (pcr  !=  NULL) pcr -> Release();    
     return  hr;    
}  
STDAPI DllRegisterServer( void ) 
{    
    HRESULT hr;    
    AFX_MANAGE_STATE(_afxModuleAddrThis);    
     if  ( ! AfxOleRegisterTypeLib(AfxGetInstanceHandle(), _tlid))    
         return  ResultFromScode(SELFREG_E_TYPELIB);    
     if  ( ! COleObjectFactoryEx::UpdateRegistryAll(TRUE))    
         return  ResultFromScode(SELFREG_E_CLASS);    
     //  ��ǿؼ���ʼ����ȫ.    
     //  ������ʼ����ȫ�������     
    hr  =  CreateComponentCategory(CATID_SafeForInitializing, L "Controls safely initializable from persistent data! " );    
     if  (FAILED(hr))  return  hr;    
     //  ע���ʼ����ȫ     
    hr  =  RegisterCLSIDInCategory(BASED_CODE _tlid , CATID_SafeForInitializing);    
     if  (FAILED(hr))  return  hr;    
     //  ��ǿؼ��ű���ȫ    
     //  �����ű���ȫ�������     
    hr  =  CreateComponentCategory(CATID_SafeForScripting, L " Controls safely scriptable! " );    
     if  (FAILED(hr))  return  hr;    
     //  ע��ű���ȫ�������     
    hr  =  RegisterCLSIDInCategory(BASED_CODE _tlid , CATID_SafeForScripting);    
     if  (FAILED(hr))  return  hr;    
     return  NOERROR;    
}    

//  DllUnregisterServer - Removes entries from the system registry     
STDAPI DllUnregisterServer( void ) 
{    
    HRESULT hr;    
    AFX_MANAGE_STATE(_afxModuleAddrThis);    
     if  ( ! AfxOleUnregisterTypeLib(_tlid, _wVerMajor, _wVerMinor))    
         return  ResultFromScode(SELFREG_E_TYPELIB);    
     if  ( ! COleObjectFactoryEx::UpdateRegistryAll(FALSE))    
         return  ResultFromScode(SELFREG_E_CLASS);    
     //  ɾ���ؼ���ʼ����ȫ���.     
    hr = UnRegisterCLSIDInCategory(BASED_CODE _tlid , CATID_SafeForInitializing);    
     if  (FAILED(hr))  return  hr;    
     //  ɾ���ؼ��ű���ȫ���     
    hr = UnRegisterCLSIDInCategory(BASED_CODE _tlid , CATID_SafeForScripting);    
     if  (FAILED(hr))  return  hr;    
     return  NOERROR;    
}  