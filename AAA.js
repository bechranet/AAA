//app.LoadPlugin( "MyPlugin" );

app.LoadScript("functions.js",true)

function OnStart()
{
    
    var lay = app.CreateLayout( "linear", "VCenter,FillXY" ); 
    
    var btn = app.CreateButton( "Test text" );
    btn.SetTextSize( 32 );
    btn.SetOnTouch(test);
    lay.AddChild( btn );
     
     var btn1 = app.CreateButton( "CallPlugin" );
    btn1.SetTextSize( 32 );
    btn1.SetOnTouch(CallPlugin);
    lay.AddChild( btn1 );
     
     var btn2 = app.CreateButton( "PLUGIN VERSION" );
    btn2.SetTextSize( 32 );
    btn2.SetOnTouch(CallVERSION);
    lay.AddChild( btn2 );
    
       var btn3 = app.CreateButton( "PLUGIN due" );
    btn3.SetTextSize( 32 );
    btn3.SetOnTouch(due);
    lay.AddChild( btn3 );
    
    plg = app.CreateObject( "Pfun" );
    plg.SetOnMyReply( uno );
    
     
    scroll = app.CreateScroller( 0.9, 0.5 );
    scroll.SetBackColor( "#ff222222" );
    lay.AddChild( scroll );
    
    //Create a text control to show results.
    txt = app.CreateText( "", 0.9, -1, "Multiline,Left,html" );
    txt.SetMargins( 0,0.1,0,0 );
    txt.SetTextColor( "#ffffffff" );
    scroll.AddChild( txt );
    
    
     
    
    app.AddLayout( lay );
}
function test()
{
    var s = "";
    for(i=0;i<110;i++) 
    {
      s +="Test for the lost string, Test Line "+ i +
        " <br> this is a test for the <br> " +
     "disappearing lines <br> somewhere on the list "+
     "when making <br> multiple lines <br> to display<br>"
    }
    s += "*** End ***";
    txt.SetHtml(s);
}




function CallPlugin()
{
  plg.MyFunc( "helloX", 21, true );
}

function uno( txt, num, bool )
{
  alert( "txt=" + txt + " num=" + num + " bool=" + bool );
}

function due( txt, num, bool )
{
  alert( "txt=" + txt + " num=" + num + " bool=" + bool );
}

function CallVERSION()
{
  alert( plg.GetVersion() );
}