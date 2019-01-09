// ActiveXDemoCtl.cpp : Implementation of the CActiveXDemoCtrl ActiveX Control class.

#include "stdafx.h"
#include "ActiveXDemo.h"
#include "ActiveXDemoCtl.h"
#include "ActiveXDemoPpg.h"


#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif


IMPLEMENT_DYNCREATE(CActiveXDemoCtrl, COleControl)


/////////////////////////////////////////////////////////////////////////////
// Message map

BEGIN_MESSAGE_MAP(CActiveXDemoCtrl, COleControl)
	//{{AFX_MSG_MAP(CActiveXDemoCtrl)
	// NOTE - ClassWizard will add and remove message map entries
	//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG_MAP
	ON_OLEVERB(AFX_IDS_VERB_PROPERTIES, OnProperties)
END_MESSAGE_MAP()


/////////////////////////////////////////////////////////////////////////////
// Dispatch map

BEGIN_DISPATCH_MAP(CActiveXDemoCtrl, COleControl)
	//{{AFX_DISPATCH_MAP(CActiveXDemoCtrl)
	DISP_PROPERTY_NOTIFY(CActiveXDemoCtrl, "TimeStyle", m_timeStyle, OnTimeStyleChanged, VT_I4)
	DISP_FUNCTION(CActiveXDemoCtrl, "Start", Start, VT_EMPTY, VTS_NONE)
	DISP_FUNCTION(CActiveXDemoCtrl, "End", End, VT_EMPTY, VTS_NONE)
	//}}AFX_DISPATCH_MAP
	DISP_FUNCTION_ID(CActiveXDemoCtrl, "AboutBox", DISPID_ABOUTBOX, AboutBox, VT_EMPTY, VTS_NONE)
END_DISPATCH_MAP()


/////////////////////////////////////////////////////////////////////////////
// Event map

BEGIN_EVENT_MAP(CActiveXDemoCtrl, COleControl)
	//{{AFX_EVENT_MAP(CActiveXDemoCtrl)
	EVENT_CUSTOM("Onsent", FireOnsent, VTS_PBSTR)
	//}}AFX_EVENT_MAP
END_EVENT_MAP()


/////////////////////////////////////////////////////////////////////////////
// Property pages

// TODO: Add more property pages as needed.  Remember to increase the count!
BEGIN_PROPPAGEIDS(CActiveXDemoCtrl, 1)
	PROPPAGEID(CActiveXDemoPropPage::guid)
END_PROPPAGEIDS(CActiveXDemoCtrl)


/////////////////////////////////////////////////////////////////////////////
// Initialize class factory and guid

IMPLEMENT_OLECREATE_EX(CActiveXDemoCtrl, "ACTIVEXDEMO.ActiveXDemoCtrl.1",
	0x6504e889, 0xb1eb, 0x4671, 0xad, 0xab, 0xe5, 0x5c, 0xde, 0xf8, 0xed, 0x7)


/////////////////////////////////////////////////////////////////////////////
// Type library ID and version

IMPLEMENT_OLETYPELIB(CActiveXDemoCtrl, _tlid, _wVerMajor, _wVerMinor)


/////////////////////////////////////////////////////////////////////////////
// Interface IDs

const IID BASED_CODE IID_DActiveXDemo =
		{ 0xca1c8cc5, 0x8b5c, 0x4417, { 0xbe, 0x5f, 0x4a, 0x16, 0x5, 0x9f, 0x26, 0xf3 } };
const IID BASED_CODE IID_DActiveXDemoEvents =
		{ 0xfa75d060, 0x540b, 0x478a, { 0xb1, 0x8b, 0xbe, 0x15, 0x25, 0x54, 0xf0, 0x9b } };


/////////////////////////////////////////////////////////////////////////////
// Control type information

static const DWORD BASED_CODE _dwActiveXDemoOleMisc =
	OLEMISC_ACTIVATEWHENVISIBLE |
	OLEMISC_SETCLIENTSITEFIRST |
	OLEMISC_INSIDEOUT |
	OLEMISC_CANTLINKINSIDE |
	OLEMISC_RECOMPOSEONRESIZE;

IMPLEMENT_OLECTLTYPE(CActiveXDemoCtrl, IDS_ACTIVEXDEMO, _dwActiveXDemoOleMisc)


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoCtrl::CActiveXDemoCtrlFactory::UpdateRegistry -
// Adds or removes system registry entries for CActiveXDemoCtrl

BOOL CActiveXDemoCtrl::CActiveXDemoCtrlFactory::UpdateRegistry(BOOL bRegister)
{
	// TODO: Verify that your control follows apartment-model threading rules.
	// Refer to MFC TechNote 64 for more information.
	// If your control does not conform to the apartment-model rules, then
	// you must modify the code below, changing the 6th parameter from
	// afxRegApartmentThreading to 0.

	if (bRegister)
		return AfxOleRegisterControlClass(
			AfxGetInstanceHandle(),
			m_clsid,
			m_lpszProgID,
			IDS_ACTIVEXDEMO,
			IDB_ACTIVEXDEMO,
			afxRegApartmentThreading,
			_dwActiveXDemoOleMisc,
			_tlid,
			_wVerMajor,
			_wVerMinor);
	else
		return AfxOleUnregisterClass(m_clsid, m_lpszProgID);
}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoCtrl::CActiveXDemoCtrl - Constructor

CActiveXDemoCtrl::CActiveXDemoCtrl()
{
	InitializeIIDs(&IID_DActiveXDemo, &IID_DActiveXDemoEvents);

	// TODO: Initialize your control's instance data here.
}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoCtrl::~CActiveXDemoCtrl - Destructor

CActiveXDemoCtrl::~CActiveXDemoCtrl()
{
	// TODO: Cleanup your control's instance data here.
}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoCtrl::OnDraw - Drawing function

void CActiveXDemoCtrl::OnDraw(
			CDC* pdc, const CRect& rcBounds, const CRect& rcInvalid)
{
	// TODO: Replace the following code with your own drawing code.
	pdc->FillRect(rcBounds, CBrush::FromHandle((HBRUSH)GetStockObject(WHITE_BRUSH)));
	pdc->Ellipse(rcBounds);
}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoCtrl::DoPropExchange - Persistence support

void CActiveXDemoCtrl::DoPropExchange(CPropExchange* pPX)
{
	ExchangeVersion(pPX, MAKELONG(_wVerMinor, _wVerMajor));
	COleControl::DoPropExchange(pPX);

	// TODO: Call PX_ functions for each persistent custom property.

}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoCtrl::OnResetState - Reset control to default state

void CActiveXDemoCtrl::OnResetState()
{
	COleControl::OnResetState();  // Resets defaults found in DoPropExchange

	// TODO: Reset any other control state here.
}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoCtrl::AboutBox - Display an "About" box to the user

void CActiveXDemoCtrl::AboutBox()
{
	CDialog dlgAbout(IDD_ABOUTBOX_ACTIVEXDEMO);
	dlgAbout.DoModal();
}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoCtrl message handlers

void CActiveXDemoCtrl::OnTimeStyleChanged() 
{
	// TODO: Add notification handler code

	SetModifiedFlag();
}

void CActiveXDemoCtrl::Start() 
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState());
	// TODO: Add your dispatch handler code here
	ShowCurrentTime();
	FireOnGive(m_strTime);

}

void CActiveXDemoCtrl::ShowCurrentTime(void) 
{
	SYSTEMTIME sys;
	CString cstrTime_A,cstrTime_B,cstrTime_C;
	GetLocalTime(&sys)
	if (m_TimeStyle == 0) {
		m_strTime.Format(_T("%4d年%d月%d日%d时%d分%d秒"),sys.wYear,sys.wMonth,sys.wDay,sys.wHour,sys.wMinute,sys.wSecond);
	} else if(m_TimeStyle == 1) {
		m_strTime.Format(_T("%4d-%d-%d %d:%d:%d"),sys.wYear,sys.wMonth,sys.wDay,sys.wHour,sys.wMinute,sys.wSecond);
	} else if(m_TimeStyle == 2) {
		m_strTime.Format(_T("%4d/%d/%d %d:%d:%d"),sys.wYear,sys.wMonth,sys.wDay,sys.wHour,sys.wMinute,sys.wSecond);
	}
	MessageBox(m_strTime);
}

void CActiveXDemoCtrl::End() 
{
	// TODO: Add your dispatch handler code here

}
