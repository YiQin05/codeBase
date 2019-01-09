

/* this ALWAYS GENERATED file contains the IIDs and CLSIDs */

/* link this file in with the server and any clients */


 /* File created by MIDL compiler version 8.01.0622 */
/* at Tue Jan 19 11:14:07 2038
 */
/* Compiler settings for MFCActiveXDemo.idl:
    Oicf, W1, Zp8, env=Win32 (32b run), target_arch=X86 8.01.0622 
    protocol : dce , ms_ext, c_ext, robust
    error checks: allocation ref bounds_check enum stub_data 
    VC __declspec() decoration level: 
         __declspec(uuid()), __declspec(selectany), __declspec(novtable)
         DECLSPEC_UUID(), MIDL_INTERFACE()
*/
/* @@MIDL_FILE_HEADING(  ) */



#ifdef __cplusplus
extern "C"{
#endif 


#include <rpc.h>
#include <rpcndr.h>

#ifdef _MIDL_USE_GUIDDEF_

#ifndef INITGUID
#define INITGUID
#include <guiddef.h>
#undef INITGUID
#else
#include <guiddef.h>
#endif

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        DEFINE_GUID(name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8)

#else // !_MIDL_USE_GUIDDEF_

#ifndef __IID_DEFINED__
#define __IID_DEFINED__

typedef struct _IID
{
    unsigned long x;
    unsigned short s1;
    unsigned short s2;
    unsigned char  c[8];
} IID;

#endif // __IID_DEFINED__

#ifndef CLSID_DEFINED
#define CLSID_DEFINED
typedef IID CLSID;
#endif // CLSID_DEFINED

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        EXTERN_C __declspec(selectany) const type name = {l,w1,w2,{b1,b2,b3,b4,b5,b6,b7,b8}}

#endif // !_MIDL_USE_GUIDDEF_

MIDL_DEFINE_GUID(IID, LIBID_MFCActiveXDemoLib,0xfbba94ef,0x4fb7,0x48ae,0xbb,0xc7,0x67,0xe6,0x3a,0x6b,0x37,0xa9);


MIDL_DEFINE_GUID(IID, DIID__DMFCActiveXDemo,0xeff65b1d,0x9853,0x4c92,0x89,0x97,0x0a,0x2c,0x99,0x8b,0x01,0x04);


MIDL_DEFINE_GUID(IID, DIID__DMFCActiveXDemoEvents,0xa189b913,0xdab3,0x423a,0xbd,0xec,0x74,0xdb,0x8b,0x20,0x2d,0x59);


MIDL_DEFINE_GUID(CLSID, CLSID_MFCActiveXDemo,0xd1992727,0xe1d9,0x490b,0x8c,0x1e,0x29,0x8e,0x69,0xd6,0x3c,0xb4);

#undef MIDL_DEFINE_GUID

#ifdef __cplusplus
}
#endif



