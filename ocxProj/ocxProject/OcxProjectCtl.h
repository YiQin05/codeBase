#if !defined(AFX_OCXPROJECTCTL_H__6DDF9612_5F34_4FBA_BC9C_860EF01745BD__INCLUDED_)
#define AFX_OCXPROJECTCTL_H__6DDF9612_5F34_4FBA_BC9C_860EF01745BD__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

// OcxProjectCtl.h : Declaration of the COcxProjectCtrl ActiveX Control class.

/////////////////////////////////////////////////////////////////////////////
// COcxProjectCtrl : See OcxProjectCtl.cpp for implementation.

class COcxProjectCtrl : public COleControl
{
	DECLARE_DYNCREATE(COcxProjectCtrl)

// Constructor
public:
	COcxProjectCtrl();

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(COcxProjectCtrl)
	public:
	virtual void OnDraw(CDC* pdc, const CRect& rcBounds, const CRect& rcInvalid);
	virtual void DoPropExchange(CPropExchange* pPX);
	virtual void OnResetState();
	//}}AFX_VIRTUAL

// Implementation
protected:
	~COcxProjectCtrl();

	 //去掉安全警告 BEGIN  
    DECLARE_INTERFACE_MAP()  
        BEGIN_INTERFACE_PART(ObjectSafety, IObjectSafety)  
        STDMETHOD(GetInterfaceSafetyOptions)(REFIID riid, DWORD __RPC_FAR *pdwSupportedOptions, DWORD __RPC_FAR *pdwEnabledOptions);  
        STDMETHOD(SetInterfaceSafetyOptions)(REFIID riid, DWORD dwOptionSetMask, DWORD dwEnabledOptions);  
    END_INTERFACE_PART(ObjectSafety)  
	//去掉安全警告 END  

	DECLARE_OLECREATE_EX(COcxProjectCtrl)    // Class factory and guid
	DECLARE_OLETYPELIB(COcxProjectCtrl)      // GetTypeInfo
	DECLARE_PROPPAGEIDS(COcxProjectCtrl)     // Property page IDs
	DECLARE_OLECTLTYPE(COcxProjectCtrl)		// Type name and misc status

// Message maps
	//{{AFX_MSG(COcxProjectCtrl)
		// NOTE - ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

// Dispatch maps
	//{{AFX_DISPATCH(COcxProjectCtrl)
	afx_msg long AddFun(long Add1, long Add2);
	//}}AFX_DISPATCH
	DECLARE_DISPATCH_MAP()

	afx_msg void AboutBox();

// Event maps
	//{{AFX_EVENT(COcxProjectCtrl)
	//}}AFX_EVENT
	DECLARE_EVENT_MAP()

// Dispatch and event IDs
public:
	enum {
	//{{AFX_DISP_ID(COcxProjectCtrl)
	dispidAddFun = 1L,
	//}}AFX_DISP_ID
	};
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_OCXPROJECTCTL_H__6DDF9612_5F34_4FBA_BC9C_860EF01745BD__INCLUDED)
