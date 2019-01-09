// MFCActiveXDemo.cpp: CMFCActiveXDemoApp 和 DLL 注册的实现。

#include "stdafx.h"
#include "MFCActiveXDemo.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif


CMFCActiveXDemoApp theApp;

const GUID CDECL _tlid = {0xfbba94ef,0x4fb7,0x48ae,{0xbb,0xc7,0x67,0xe6,0x3a,0x6b,0x37,0xa9}};
const WORD _wVerMajor = 1;
const WORD _wVerMinor = 0;



// CMFCActiveXDemoApp::InitInstance - DLL 初始化

BOOL CMFCActiveXDemoApp::InitInstance()
{
	BOOL bInit = COleControlModule::InitInstance();

	if (bInit)
	{
		// TODO:  在此添加您自己的模块初始化代码。
	}

	return bInit;
}



// CMFCActiveXDemoApp::ExitInstance - DLL 终止

int CMFCActiveXDemoApp::ExitInstance()
{
	// TODO:  在此添加您自己的模块终止代码。

	return COleControlModule::ExitInstance();
}



// DllRegisterServer - 将项添加到系统注册表

STDAPI DllRegisterServer(void)
{
	AFX_MANAGE_STATE(_afxModuleAddrThis);

	if (!AfxOleRegisterTypeLib(AfxGetInstanceHandle(), _tlid))
		return ResultFromScode(SELFREG_E_TYPELIB);

	if (!COleObjectFactoryEx::UpdateRegistryAll(TRUE))
		return ResultFromScode(SELFREG_E_CLASS);

	return NOERROR;
}



// DllUnregisterServer - 将项从系统注册表中移除

STDAPI DllUnregisterServer(void)
{
	AFX_MANAGE_STATE(_afxModuleAddrThis);

	if (!AfxOleUnregisterTypeLib(_tlid, _wVerMajor, _wVerMinor))
		return ResultFromScode(SELFREG_E_TYPELIB);

	if (!COleObjectFactoryEx::UpdateRegistryAll(FALSE))
		return ResultFromScode(SELFREG_E_CLASS);

	return NOERROR;
}
