// OcxProjectCtl.cpp : Implementation of the COcxProjectCtrl ActiveX Control class.

#include "stdafx.h"
#include "ocxProject.h"
#include "OcxProjectCtl.h"
#include "OcxProjectPpg.h"


#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif


IMPLEMENT_DYNCREATE(COcxProjectCtrl, COleControl)


/////////////////////////////////////////////////////////////////////////////
// Message map

BEGIN_MESSAGE_MAP(COcxProjectCtrl, COleControl)
	//{{AFX_MSG_MAP(COcxProjectCtrl)
	// NOTE - ClassWizard will add and remove message map entries
	//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG_MAP
	ON_OLEVERB(AFX_IDS_VERB_PROPERTIES, OnProperties)
END_MESSAGE_MAP()


/////////////////////////////////////////////////////////////////////////////
// Dispatch map

BEGIN_DISPATCH_MAP(COcxProjectCtrl, COleControl)
	//{{AFX_DISPATCH_MAP(COcxProjectCtrl)
	DISP_FUNCTION(COcxProjectCtrl, "AddFun", AddFun, VT_I4, VTS_I4 VTS_I4)
	//}}AFX_DISPATCH_MAP
	DISP_FUNCTION_ID(COcxProjectCtrl, "AboutBox", DISPID_ABOUTBOX, AboutBox, VT_EMPTY, VTS_NONE)
END_DISPATCH_MAP()


/////////////////////////////////////////////////////////////////////////////
// Event map

BEGIN_EVENT_MAP(COcxProjectCtrl, COleControl)
	//{{AFX_EVENT_MAP(COcxProjectCtrl)
	// NOTE - ClassWizard will add and remove event map entries
	//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_EVENT_MAP
END_EVENT_MAP()


/////////////////////////////////////////////////////////////////////////////
// Property pages

// TODO: Add more property pages as needed.  Remember to increase the count!
BEGIN_PROPPAGEIDS(COcxProjectCtrl, 1)
	PROPPAGEID(COcxProjectPropPage::guid)
END_PROPPAGEIDS(COcxProjectCtrl)


/////////////////////////////////////////////////////////////////////////////
// Initialize class factory and guid

IMPLEMENT_OLECREATE_EX(COcxProjectCtrl, "OCXPROJECT.OcxProjectCtrl.1",
	0xa4faa82d, 0x36b3, 0x47a8, 0x82, 0x78, 0x12, 0x99, 0x1f, 0x23, 0x29, 0xac)


/////////////////////////////////////////////////////////////////////////////
// Type library ID and version

IMPLEMENT_OLETYPELIB(COcxProjectCtrl, _tlid, _wVerMajor, _wVerMinor)


/////////////////////////////////////////////////////////////////////////////
// Interface IDs

const IID BASED_CODE IID_DOcxProject =
		{ 0x1e05e1e8, 0xfa32, 0x43bd, { 0xbc, 0x92, 0x88, 0xde, 0xfd, 0x81, 0x75, 0x68 } };
const IID BASED_CODE IID_DOcxProjectEvents =
		{ 0xa342b590, 0x58ad, 0x4d63, { 0xbb, 0xce, 0x1e, 0xaf, 0x9c, 0x4a, 0x2a, 0x4b } };


/////////////////////////////////////////////////////////////////////////////
// Control type information

static const DWORD BASED_CODE _dwOcxProjectOleMisc =
	OLEMISC_ACTIVATEWHENVISIBLE |
	OLEMISC_SETCLIENTSITEFIRST |
	OLEMISC_INSIDEOUT |
	OLEMISC_CANTLINKINSIDE |
	OLEMISC_RECOMPOSEONRESIZE;

IMPLEMENT_OLECTLTYPE(COcxProjectCtrl, IDS_OCXPROJECT, _dwOcxProjectOleMisc)


/////////////////////////////////////////////////////////////////////////////
// COcxProjectCtrl::COcxProjectCtrlFactory::UpdateRegistry -
// Adds or removes system registry entries for COcxProjectCtrl

BOOL COcxProjectCtrl::COcxProjectCtrlFactory::UpdateRegistry(BOOL bRegister)
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
			IDS_OCXPROJECT,
			IDB_OCXPROJECT,
			afxRegApartmentThreading,
			_dwOcxProjectOleMisc,
			_tlid,
			_wVerMajor,
			_wVerMinor);
	else
		return AfxOleUnregisterClass(m_clsid, m_lpszProgID);
}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectCtrl::COcxProjectCtrl - Constructor

COcxProjectCtrl::COcxProjectCtrl()
{
	InitializeIIDs(&IID_DOcxProject, &IID_DOcxProjectEvents);

	// TODO: Initialize your control's instance data here.
}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectCtrl::~COcxProjectCtrl - Destructor

COcxProjectCtrl::~COcxProjectCtrl()
{
	// TODO: Cleanup your control's instance data here.
}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectCtrl::OnDraw - Drawing function

void COcxProjectCtrl::OnDraw(
			CDC* pdc, const CRect& rcBounds, const CRect& rcInvalid)
{
	// TODO: Replace the following code with your own drawing code.
	pdc->FillRect(rcBounds, CBrush::FromHandle((HBRUSH)GetStockObject(WHITE_BRUSH)));
	pdc->Ellipse(rcBounds);
}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectCtrl::DoPropExchange - Persistence support

void COcxProjectCtrl::DoPropExchange(CPropExchange* pPX)
{
	ExchangeVersion(pPX, MAKELONG(_wVerMinor, _wVerMajor));
	COleControl::DoPropExchange(pPX);

	// TODO: Call PX_ functions for each persistent custom property.

}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectCtrl::OnResetState - Reset control to default state

void COcxProjectCtrl::OnResetState()
{
	COleControl::OnResetState();  // Resets defaults found in DoPropExchange

	// TODO: Reset any other control state here.
}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectCtrl::AboutBox - Display an "About" box to the user

void COcxProjectCtrl::AboutBox()
{
	CDialog dlgAbout(IDD_ABOUTBOX_OCXPROJECT);
	dlgAbout.DoModal();
}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectCtrl message handlers

long COcxProjectCtrl::AddFun(long Add1, long Add2) 
{
	// TODO: Add your dispatch handler code here

	return 0;
}
