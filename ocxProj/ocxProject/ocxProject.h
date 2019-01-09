#if !defined(AFX_OCXPROJECT_H__6FFF6968_68A1_429D_BB16_3ECA097EE893__INCLUDED_)
#define AFX_OCXPROJECT_H__6FFF6968_68A1_429D_BB16_3ECA097EE893__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

// ocxProject.h : main header file for OCXPROJECT.DLL

#if !defined( __AFXCTL_H__ )
	#error include 'afxctl.h' before including this file
#endif

#include "resource.h"       // main symbols

/////////////////////////////////////////////////////////////////////////////
// COcxProjectApp : See ocxProject.cpp for implementation.

class COcxProjectApp : public COleControlModule
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

#endif // !defined(AFX_OCXPROJECT_H__6FFF6968_68A1_429D_BB16_3ECA097EE893__INCLUDED)
