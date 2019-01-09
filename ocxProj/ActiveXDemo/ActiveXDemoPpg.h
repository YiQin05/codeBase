#if !defined(AFX_ACTIVEXDEMOPPG_H__5419A22B_0388_4590_A65C_989DA85AC7C9__INCLUDED_)
#define AFX_ACTIVEXDEMOPPG_H__5419A22B_0388_4590_A65C_989DA85AC7C9__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

// ActiveXDemoPpg.h : Declaration of the CActiveXDemoPropPage property page class.

////////////////////////////////////////////////////////////////////////////
// CActiveXDemoPropPage : See ActiveXDemoPpg.cpp.cpp for implementation.

class CActiveXDemoPropPage : public COlePropertyPage
{
	DECLARE_DYNCREATE(CActiveXDemoPropPage)
	DECLARE_OLECREATE_EX(CActiveXDemoPropPage)

// Constructor
public:
	CActiveXDemoPropPage();

// Dialog Data
	//{{AFX_DATA(CActiveXDemoPropPage)
	enum { IDD = IDD_PROPPAGE_ACTIVEXDEMO };
		// NOTE - ClassWizard will add data members here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_DATA

// Implementation
protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support

// Message maps
protected:
	//{{AFX_MSG(CActiveXDemoPropPage)
		// NOTE - ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ACTIVEXDEMOPPG_H__5419A22B_0388_4590_A65C_989DA85AC7C9__INCLUDED)
