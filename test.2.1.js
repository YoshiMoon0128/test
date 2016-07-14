var te=0;
var ba=true;
function newLevel(hasLevel){
clientMessage("§e/hp1:体力をネームタグで表示します。\n§e/hp2:体力をメッセージで表示します。デフォルトではこの表示方法です。\n§e/hpoff:体力表示機能をoffにします。\n§e/id:エンティティIDを表示します。\n§e/hpbar:HPバーのON,OFFを切り替えます。\n§e/help:ヘルプを表示します。");
  }
function procCmd(cmd){
  if(cmd=='hp1'){if(te!=2){te=2;clientMessage("体力表示1(ネームタグ表示)ON");}}
if(cmd=='hpoff'){if(te!=1){te=1;clientMessage("体力表示OFF");}}
if(cmd=='hp2'){if(te!=0){te=0;clientMessage("体力表示2(メッセージ表示)ON");}}
if(cmd=='id'){if(te!=3){te=3;clientMessage("エンティティID表示ON");}}
if(cmd=='hpbar'){if(ba){ba=false;clientMessage("HPバーOFF")}
else{ba=true;clientMessage("HPバーON")}}
if(cmd=='help'){clientMessage("§e/hp1:体力をネームタグで表示します\n§e/hp2:体力をメッセージで表示します\n§e/hpoff:体力表示機能をoffにします\n§e/id:エンティティIDを表示します\n§e/hpbar:HPバーのON,OFFを切り替えます\n§e/help:ヘルプを表示します");}}

var ehp=Entity.getHealth;

function modTick(){

var pe=Player.getPointedEntity();
var et=Entity.getEntityTypeId(pe);
var ent=Entity.setNameTag;
//ネームタグ表示
if(te==2){
 if(et==10){ent(pe,"§aニワトリ§r"+"HP:"+ehp(pe));}
else if(et==11){ent(pe,"§a牛§r"+"HP:"+ehp(pe));}
else if(et==12){ ent(pe,"§a豚§r"+"HP:"+ehp(pe));}
else if(et==13){ ent(pe,"§a羊§r"+"HP:"+ehp(pe));}
else if(et==14){ ent(pe,"§eオオカミ§r"+"HP:"+ehp(pe));}
else if(et==15){ ent(pe,"§a村人§r"+"HP:"+ehp(pe));}
else if(et==16){ ent(pe,"§aムーシュルーム§r"+"HP:"+ehp(pe));}
else if(et==17){ ent(pe,"§aイカ§r"+"HP:"+ehp(pe));}
else if(et==18){ ent(pe,"§aうさぎ§r"+"HP:"+ehp(pe));}
else if(et==19){ent(pe,"§aコウモリ§r"+"HP:"+ehp(pe));}
else if(et==20){ent(pe,"§aアイアンゴーレム§r"+"HP:"+ehp(pe));}
else if(et==21){ent(pe,"§aスノーゴーレム§r"+"HP:"+ehp(pe));}
else if(et==22){ent(pe,"§a山猫§r"+"HP:"+ehp(pe));}
else if(et==32){ent(pe,"§cゾンビ§r"+"HP:"+ehp(pe));}
else if(et==33){ent(pe,"§cクリーパー§r"+"HP:"+ehp(pe));}
else if(et==34){ent(pe,"§cスケルトン§r"+"HP:"+ehp(pe));}
else if(et==35){ent(pe,"§cスパイダー§r"+"HP:"+ehp(pe));}
else if(et==36){ent(pe,"§eゾンビピッグマン§r"+"HP:"+ehp(pe));}
else if(et==37){ent(pe,"§cスライム§r"+"HP:"+ehp(pe));}
else if(et==38){ent(pe,"§eエンダーマン§r"+"HP:"+ehp(pe));}
else if(et==39){ent(pe,"§cシルバーフィッシュ§r"+"HP:"+ehp(pe));}
else if(et==40){ent(pe,"§c毒ぐも§r"+"HP:"+ehp(pe));}
else if(et==41){ent(pe,"§cガスト§r"+"HP:"+ehp(pe));}
else if(et==42){ent(pe,"§cマグマキューブ§r"+"HP:"+ehp(pe));}
else if(et==43){ent(pe,"§cブレイズ§r"+"HP:"+ehp(pe));}
else if(et==44){ent(pe,"§c村人ゾンビ§r"+"HP:"+ehp(pe));}
else if(et==45){ent(pe,"§cウィッチ§r"+"HP:"+ehp(pe));}}

var msg=ModPE.showTipMessage;
//メッセージ表示

if(te==0){
if(pe!==-1){
if(et==10){msg("§aニワトリ§r"+"HP:"+ehp(pe));}
else if(et==11){msg("§a牛§r"+"HP:"+ehp(pe));}
else if(et==12){ msg("§a豚§r"+"HP:"+ehp(pe));}
else if(et==13){ msg("§a羊§r"+"HP:"+ehp(pe));}
else if(et==14){ msg("§eオオカミ§r"+"HP:"+ehp(pe));}
else if(et==15){ msg("§a村人§r"+"HP:"+ehp(pe));}
else if(et==16){ msg("§aムーシュルーム§r"+"HP:"+ehp(pe));}
else if(et==17){ msg("§aイカ§r"+"HP:"+ehp(pe));}
else if(et==18){ msg("§aうさぎ§r"+"HP:"+ehp(pe));}
else if(et==19){msg("§aコウモリ§r"+"HP:"+ehp(pe));}
else if(et==20){msg("§aアイアンゴーレム§r"+"HP:"+ehp(pe));}
else if(et==21){msg("§aスノーゴーレム§r"+"HP:"+ehp(pe));}
else if(et==22){msg("§aオセロット§r"+"HP:"+ehp(pe));}
else if(et==23){msg("§a馬§r"+"HP:"+ehp(pe));}
else if(et==24){msg("§aロバ§r"+"HP:"+ehp(pe));}
else if(et==25){msg("§aラバ§r"+"HP:"+ehp(pe));}
else if(et==26){msg("§aスケルトンホース§r"+"HP:"+ehp(pe));}
else if(et==27){msg("§aゾンビホース§r"+"HP:"+ehp(pe));}
else if(et==32){msg("§cゾンビ§r"+"HP:"+ehp(pe));}
else if(et==33){msg("§cクリーパー§r"+"HP:"+ehp(pe));}
else if(et==34){msg("§c助さん§r"+"HP:"+ehp(pe));}
else if(et==35){msg("§cスパイダー§r"+"HP:"+ehp(pe));}
else if(et==36){msg("§eゾンビピッグマン§r"+"HP:"+ehp(pe));}
else if(et==37){msg("§cスライム§r"+"HP:"+ehp(pe));}
else if(et==38){msg("§eエンダーマン§r"+"HP:"+ehp(pe));}
else if(et==39){msg("§cシルバーフィッシュ§r"+"HP:"+ehp(pe));}
else if(et==40){msg("§c毒ぐも§r"+"HP:"+ehp(pe));}
else if(et==41){msg("§cガスト§r"+"HP:"+ehp(pe));}
else if(et==42){msg("§cマグマキューブ§r"+"HP:"+ehp(pe));}
else if(et==43){msg("§cブレイズ§r"+"HP:"+ehp(pe));}
else if(et==44){msg("§c村人ゾンビ§r"+"HP:"+ehp(pe));}
else if(et==45){msg("§cウィッチ§r"+"HP:"+ehp(pe));}
else if(et==46){msg("§cストレイ§r"+"HP:"+ehp(pe));}
else if(et==47){msg("§cハスク§r"+"HP:"+ehp(pe));}
else if(et==48){msg("§cウィザースケルトン§r"+"HP:"+ehp(pe));}
else if(et==63){msg("HP:"+ehp(pe));}
else if(et!==0){msg("エンティティID:"+et);}}}

if(te==3&&pe!=-1){msg("エンティティID:"+et);}

//HPbarここから
if(ba){
var mehp=ep=0;
if(pe!=-1&&et!=-1){gon=true;}else{gon=false;}
if(gon){
for(i=10;i<64;i++){
if(et==i){
ep=Entity.getHealth(pe);
mehp=Entity.getMaxHealth(pe);}}
if(!gg){
addGUI(mehp,ep);
pp=ep;
gg=true;}
if(pp!==ep){closeGUI();gg=false;}}
if(!gon&&gg){ttt++;if(ttt==25){closeGUI();gg=false;ttt=0;}}else ttt=0;}//barがtrue
else closeGUI();}//barがofalse
var gon=gg=false;
var ttt=0;
var pp;
function leaveGame(){
closeGUI();
}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function addGUI(max,set){
  ctx.runOnUiThread(
    new java.lang.Runnable({
      run:function(){
        try{
          var bar = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);//プログレスバーを作る宣言
    bar.setMax(max);//バーの最大値
    bar.setProgress(set);//バーの設定値
        gui=new android.widget.PopupWindow(bar,500,200);//ウィンドウの大きさを設定
        gui.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER,0,200);//ウィンドウを中央の少し下に表示
        }catch(e){
          clientMessage(e);
        }
      }
    })
  );
}
function closeGUI(){
ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
gui.dismiss();
}catch(er){
clientMessage(er);
}
}}));
}
//ここまで
