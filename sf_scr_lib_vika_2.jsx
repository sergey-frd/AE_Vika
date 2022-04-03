﻿//===================================================
// function handleNewComp2(compName)
// {
//     //var compName = Prefix;
//     var newComp = app.project.items.addComp(compName, compWidth, compHeight, 1.0, durationSec, 25);
//     return newComp;
// 
// }

//===================================================
function readXmlae_vika22_3_1() 
{
    //var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\ae_vika22_3.xml");
    var file = File("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_Vika\\xml\\ae_vika22_3.xml");
    file.open("r");
    var xmlString = file.read();
    var myXml = new XML(xmlString);
    file.close();
    return myXml;
}


//===================================================
function  handleXmlVika_1()
{

    myXml = readXmlae_vika22_3_1();
    var i = 0; 
    while(myXml.media.video.track.clipitem.file[i] != undefined) {

        if (myXml.media.video.track.clipitem.file[i].pathurl) {

            filePathUrl.push(myXml.media.video.track.clipitem.file[i].pathurl);
            var w = myXml.media.video.track.clipitem.file[i].media.video.samplecharacteristics.width;
            fileWidth.push(parseIntSmarter(w));
            var h = myXml.media.video.track.clipitem.file[i].media.video.samplecharacteristics.height;
            fileHeight.push(parseIntSmarter(h));

        } // if (myXml.media.video.track.clipitem.file[i].pathurl) != undefined) 
        i++;
    }


    for(var i = 0; i < filePathUrl.length; i++) {
        //lg.writeln(' i= '+ String(i+1) +'  => ' + filePathUrl[i]);

        //var fp1 = filePathUrl[i].replace("file:\/\/localhost\/","");
        //var fp2 = fp1.replace("E%3a","E:");

        var fpList = filePathUrl[i].split('\/');

        var winPath = '';
        for(var ii = 0; ii < fpList.length; ii++) {

            if(fpList[ii] == "file:")     {continue;}
            if(fpList[ii] == "localhost") {continue;}
            if(fpList[ii] == "E%3a")    {winPath += "E:\\\\"; continue;}

            winPath += fpList[ii];
            if (ii < fpList.length -1 && ii > 3) {winPath += "\\\\";}
            
        }
        // lg.writeln(' i= '+ String(i+1) +'   winPath=> ' + winPath);
        filePathUrl[i] = winPath

        fileName.push(fpList[fpList.length-1])
        //lg.writeln(' i= '+ String(i+1) +'  filePathUrl=> ' + filePathUrl[i]);
        //lg.writeln(' i= '+ String(i+1) +'  fileName=> '    + fileName[i]);
        //
        //lg.writeln(' i= '+ String(i+1) +'   fileWidth[i]=> '  + fileWidth[i].toString());
        //lg.writeln(' i= '+ String(i+1) +'   fileHeight[i]=> ' + fileHeight[i].toString());

        var mi = Math.min(compHeight*100/fileHeight[i],compHeight*100/fileWidth[i])
        var ma = Math.max(compHeight*100/fileHeight[i],compHeight*100/fileWidth[i])

        //lg.writeln(' i= '+ String(i+1) +'   mi=> '  + mi.toString());
        //lg.writeln(' i= '+ String(i+1) +'   ma=> '  + ma.toString());

        //var mi = Math.min (compHeight*100/fileHeight[i]),(Math.round(compHeight*100/fileWidth[i]))
        //var ma = Math.max (compHeight*100/fileHeight[i]),(Math.round(compHeight*100/fileWidth[i]))

        scaleMin.push(Math.round(mi,2));
        scaleMax.push(Math.round(ma,2));
        
        //lg.writeln(' i= '+ String(i+1) +'   scaleMin[i]=> '  + scaleMin[i].toString());
        //lg.writeln(' i= '+ String(i+1) +'   scaleMax[i]=> '  + scaleMax[i].toString());


    }

}


//===================================================


//===================================================


//===================================================

