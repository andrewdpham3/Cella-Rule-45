// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.
function draw_rect( ctx, stroke, fill ) 
{
    stroke = stroke || 'lightgrey';
    fill = fill || 'dimgrey';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(75, 50, canvas.width - 150, canvas.height - 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore( );
}

// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}

/*
<!–– Javascript ––>
<script>
//initialize first gen array
var firstgen = new Array(400).fill(0);
firstgen[200]=1;//seed
//create array of all cells
var cells = new Array(160000).fill(0);
//copy our seeded first gen into allcells
for(var i=0;i<400;i++)
  cells[i]=firstgen[i];
//apply elementary cell automata rule 45
for(var gen=0;gen<400;gen++)//for 400 generations
  for(var cell=0;cell<400;cell++){//for 400 cells
    var c = gen * 400 + cell;//index of current cell
    var nextgen = c + 400;//index of corresponding cell in next gen
    if(cell==0){//special case for left edge cells
      if(cells[c]==1 && cells[c+1]==1)//rule 5
        cells[nextgen]==1;
      if(cells[c]==1 && cells[c+1]==0)//rule 6
        cells[nextgen]==1;
      if(cells[c]==0 && cells[c+1]==1)//rule 7
        cells[nextgen]==0;
      if(cells[c]==0 && cells[c+1]==0)//rule 8
        cells[nextgen]==1;
    }
    else if(cell==399){//special case for right edge cells
      if(cells[c-1]==1 && cells[c]==1)//rule 2
        cells[nextgen]==0;
      if(cells[c-1]==1 && cells[c]==0)//rule 4
        cells[nextgen]==0;
      if(cells[c-1]==0 && cells[c]==1)//rule 6
        cells[nextgen]==1;
      if(cells[c-1]==0 && cells[c]==0)//rule 8
        cells[nextgen]==1;
    }
    else{//for all non-edge cells
      if(cells[c-1]==1 && cells[c]==1 && cells[c+1]==1)//rule 1
        cells[nextgen]=0;
      if(cells[c-1]==1 && cells[c]==1 && cells[c+1]==0)//rule 2
        cells[nextgen]=0;
      if(cells[c-1]==1 && cells[c]==0 && cells[c+1]==1)//rule 3
        cells[nextgen]=1;
      if(cells[c-1]==1 && cells[c]==0 && cells[c+1]==0)//rule 4
        cells[nextgen]=0;
      if(cells[c-1]==0 && cells[c]==1 && cells[c+1]==1)//rule 5
        cells[nextgen]=1;
      if(cells[c-1]==0 && cells[c]==1 && cells[c+1]==0)//rule 6
        cells[nextgen]=1;
      if(cells[c-1]==0 && cells[c]==0 && cells[c+1]==1)//rule 7
        cells[nextgen]=0;
      if(cells[c-1]==0 && cells[c]==0 && cells[c+1]==0)//rule 8
        cells[nextgen]=1;
    }
  }
//add squares
const squares = document.querySelector('.squares');
for(var i = 0; i < 160000; i++) {
  const level = cells[i];
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}
</script>
*/ 
