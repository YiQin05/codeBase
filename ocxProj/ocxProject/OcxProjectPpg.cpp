// OcxProjectPpg.cpp : Implementation of the COcxProjectPropPage property page class.

#include "stdafx.h"
#include "ocxProject.h"
#include "OcxProjectPpg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif


IMPLEMENT_DYNCREATE(COcxProjectPropPage, COlePropertyPage)


/////////////////////////////////////////////////////////////////////////////
// Message map

BEGIN_MESSAGE_MAP(COcxProjectPropPage, COlePropertyPage)
	//{{AFX_MSG_MAP(COcxProjectPropPage)
	// NOTE - ClassWizard will add and remove message map entries
	//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()


/////////////////////////////////////////////////////////////////////////////
// Initialize class factory and guid

IMPLEMENT_OLECREATE_EX(COcxProjectPropPage, "OCXPROJECT.OcxProjectPropPage.1",
	0xabc4711a, 0x7018, 0x4c45, 0xbd, 0x6b, 0xc0, 0x15, 0xc2, 0x4b, 0x53, 0xb6)


/////////////////////////////////////////////////////////////////////////////
// COcxProjectPropPage::COcxProjectPropPageFactory::UpdateRegistry -
// Adds or removes system registry entries for COcxProjectPropPage

BOOL COcxProjectPropPage::COcxProjectPropPageFactory::UpdateRegistry(BOOL bRegister)
{
	if (bRegister)
		return AfxOleRegisterPropertyPageClass(AfxGetInstanceHandle(),
			m_clsid, IDS_OCXPROJECT_PPG);
	else
		return AfxOleUnregisterClass(m_clsid, NULL);
}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectPropPage::COcxProjectPropPage - Constructor

COcxProjectPropPage::COcxProjectPropPage() :
	COlePropertyPage(IDD, IDS_OCXPROJECT_PPG_CAPTION)
{
	//{{AFX_DATA_INIT(COcxProjectPropPage)
	// NOTE: ClassWizard will add member initialization here
	//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_DATA_INIT

	SetHelpInfo(_T("Names to appear in the control"), _T("OCXPROJECT.HLP"), 0);
}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectPropPage::DoDataExchange - Moves data between page and properties

void COcxProjectPropPage::DoDataExchange(CDataExchange* pDX)
{
	//{{AFX_DATA_MAP(COcxProjectPropPage)
	// NOTE: ClassWizard will add DDP, DDX, and DDV calls here
	//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_DATA_MAP
	DDP_PostProcessing(pDX);
}


/////////////////////////////////////////////////////////////////////////////
// COcxProjectPropPage message handlers
