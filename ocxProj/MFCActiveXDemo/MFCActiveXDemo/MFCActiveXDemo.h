#pragma once

// MFCActiveXDemo.h: MFCActiveXDemo.DLL 的主标头文件

#if !defined( __AFXCTL_H__ )
#error "在包括此文件之前包括“afxctl.h”"
#endif

#include "resource.h"       // 主符号


// CMFCActiveXDemoApp: 请参阅 MFCActiveXDemo.cpp 了解实现。

class CMFCActiveXDemoApp : public COleControlModule
{
public:
	BOOL InitInstance();
	int ExitInstance();
};

extern const GUID CDECL _tlid;
extern const WORD _wVerMajor;
extern const WORD _wVerMinor;

