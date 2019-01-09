#if !defined(AFX_OCXPROJECTPPG_H__16735BE3_6A3F_4555_BC55_F7E188F86041__INCLUDED_)
#define AFX_OCXPROJECTPPG_H__16735BE3_6A3F_4555_BC55_F7E188F86041__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

// OcxProjectPpg.h : Declaration of the COcxProjectPropPage property page class.

////////////////////////////////////////////////////////////////////////////
// COcxProjectPropPage : See OcxProjectPpg.cpp.cpp for implementation.

class COcxProjectPropPage : public COlePropertyPage
{
	DECLARE_DYNCREATE(COcxProjectPropPage)
	DECLARE_OLECREATE_EX(COcxProjectPropPage)

// Constructor
public:
	COcxProjectPropPage();

// Dialog Data
	//{{AFX_DATA(COcxProjectPropPage)
	enum { IDD = IDD_PROPPAGE_OCXPROJECT };
		// NOTE - ClassWizard will add data members here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_DATA

// Implementation
protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support

// Message maps
protected:
	//{{AFX_MSG(COcxProjectPropPage)
		// NOTE - ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_OCXPROJECTPPG_H__16735BE3_6A3F_4555_BC55_F7E188F86041__INCLUDED)
