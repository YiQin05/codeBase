// ActiveXDemoPpg.cpp : Implementation of the CActiveXDemoPropPage property page class.

#include "stdafx.h"
#include "ActiveXDemo.h"
#include "ActiveXDemoPpg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif


IMPLEMENT_DYNCREATE(CActiveXDemoPropPage, COlePropertyPage)


/////////////////////////////////////////////////////////////////////////////
// Message map

BEGIN_MESSAGE_MAP(CActiveXDemoPropPage, COlePropertyPage)
	//{{AFX_MSG_MAP(CActiveXDemoPropPage)
	// NOTE - ClassWizard will add and remove message map entries
	//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()


/////////////////////////////////////////////////////////////////////////////
// Initialize class factory and guid

IMPLEMENT_OLECREATE_EX(CActiveXDemoPropPage, "ACTIVEXDEMO.ActiveXDemoPropPage.1",
	0x77c4835b, 0x7ba8, 0x4349, 0xab, 0x40, 0xec, 0xf5, 0xff, 0xc0, 0xa1, 0xf6)


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoPropPage::CActiveXDemoPropPageFactory::UpdateRegistry -
// Adds or removes system registry entries for CActiveXDemoPropPage

BOOL CActiveXDemoPropPage::CActiveXDemoPropPageFactory::UpdateRegistry(BOOL bRegister)
{
	if (bRegister)
		return AfxOleRegisterPropertyPageClass(AfxGetInstanceHandle(),
			m_clsid, IDS_ACTIVEXDEMO_PPG);
	else
		return AfxOleUnregisterClass(m_clsid, NULL);
}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoPropPage::CActiveXDemoPropPage - Constructor

CActiveXDemoPropPage::CActiveXDemoPropPage() :
	COlePropertyPage(IDD, IDS_ACTIVEXDEMO_PPG_CAPTION)
{
	//{{AFX_DATA_INIT(CActiveXDemoPropPage)
	// NOTE: ClassWizard will add member initialization here
	//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_DATA_INIT
}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoPropPage::DoDataExchange - Moves data between page and properties

void CActiveXDemoPropPage::DoDataExchange(CDataExchange* pDX)
{
	//{{AFX_DATA_MAP(CActiveXDemoPropPage)
	// NOTE: ClassWizard will add DDP, DDX, and DDV calls here
	//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_DATA_MAP
	DDP_PostProcessing(pDX);
}


/////////////////////////////////////////////////////////////////////////////
// CActiveXDemoPropPage message handlers
