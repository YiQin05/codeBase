#if !defined(AFX_ACTIVEXDEMO_H__6B1CE964_56F4_4D80_9AA9_FB60B63AB162__INCLUDED_)
#define AFX_ACTIVEXDEMO_H__6B1CE964_56F4_4D80_9AA9_FB60B63AB162__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

// ActiveXDemo.h : main header file for ACTIVEXDEMO.DLL

#if !defined( __AFXCTL_H__ )
	#error include 'afxctl.h' before including this file
#endif

#include "resource.h"       // main symbols

/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoApp : See ActiveXDemo.cpp for implementation.

class CActiveXDemoApp : public COleControlModule
{
public:
	BOOL InitInstance();
	int ExitInstance();
};

extern const GUID CDECL _tlid;
extern const WORD _wVerMajor;
extern const WORD _wVerMinor;

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ACTIVEXDEMO_H__6B1CE964_56F4_4D80_9AA9_FB60B63AB162__INCLUDED)
