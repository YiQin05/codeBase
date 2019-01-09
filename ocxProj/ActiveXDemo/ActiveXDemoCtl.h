#if !defined(AFX_ACTIVEXDEMOCTL_H__1A2B4804_D0D1_42BE_AAAF_93C552B88DBF__INCLUDED_)
#define AFX_ACTIVEXDEMOCTL_H__1A2B4804_D0D1_42BE_AAAF_93C552B88DBF__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

// ActiveXDemoCtl.h : Declaration of the CActiveXDemoCtrl ActiveX Control class.

/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoCtrl : See ActiveXDemoCtl.cpp for implementation.

class CActiveXDemoCtrl : public COleControl
{
	DECLARE_DYNCREATE(CActiveXDemoCtrl)

// Constructor
public:
	CActiveXDemoCtrl();

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CActiveXDemoCtrl)
	public:
	virtual void OnDraw(CDC* pdc, const CRect& rcBounds, const CRect& rcInvalid);
	virtual void DoPropExchange(CPropExchange* pPX);
	virtual void OnResetState();
	//}}AFX_VIRTUAL

// Implementation
protected:
	~CActiveXDemoCtrl();

	DECLARE_OLECREATE_EX(CActiveXDemoCtrl)    // Class factory and guid
	DECLARE_OLETYPELIB(CActiveXDemoCtrl)      // GetTypeInfo
	DECLARE_PROPPAGEIDS(CActiveXDemoCtrl)     // Property page IDs
	DECLARE_OLECTLTYPE(CActiveXDemoCtrl)		// Type name and misc status

// Message maps
	//{{AFX_MSG(CActiveXDemoCtrl)
	afx_msg void OnMouseMove(UINT nFlags, CPoint point);
	afx_msg void OnActivate(UINT nState, CWnd* pWndOther, BOOL bMinimized);
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

// Dispatch maps
	//{{AFX_DISPATCH(CActiveXDemoCtrl)
	long m_timeStyle;
	afx_msg void OnTimeStyleChanged();
	afx_msg void Start();
	afx_msg void End();
	//}}AFX_DISPATCH
	DECLARE_DISPATCH_MAP()

	afx_msg void AboutBox();

// Event maps
	//{{AFX_EVENT(CActiveXDemoCtrl)
	void FireOnsent(BSTR FAR* lpstrTime)
		{FireEvent(eventidOnsent,EVENT_PARAM(VTS_PBSTR), lpstrTime);}
	//}}AFX_EVENT
	DECLARE_EVENT_MAP()

// Dispatch and event IDs
public:
	enum {
	//{{AFX_DISP_ID(CActiveXDemoCtrl)
	dispidTimeStyle = 1L,
	dispidStart = 2L,
	dispidEnd = 3L,
	eventidOnsent = 1L,
	//}}AFX_DISP_ID
	};
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ACTIVEXDEMOCTL_H__1A2B4804_D0D1_42BE_AAAF_93C552B88DBF__INCLUDED)
