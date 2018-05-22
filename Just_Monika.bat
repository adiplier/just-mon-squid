@ECHO ON

SET TmpBatch=%temp%\~tmpLogonMessage.cmd
IF EXIST "%TmpBatch%" DEL /Q /F "%TmpBatch%"

SET msgboxTitle= 
SET msgboxLine1=Just Monika
SET tmpmsgbox=%temp%\~tmpmsgbox.vbs

ECHO @ECHO OFF                                                    >>"%TmpBatch%"
ECHO IF EXIST "%tmpmsgbox%" DEL /F /Q "%tmpmsgbox%"               >>"%TmpBatch%"
ECHO ECHO msgbox "%msgboxLine1%",0,"%msgboxTitle%"^>"%tmpmsgbox%" >>"%TmpBatch%"
ECHO WSCRIPT "%tmpmsgbox%"                                        >>"%TmpBatch%"

START /MIN CMD /C "%TmpBatch%"

EXIT /B   