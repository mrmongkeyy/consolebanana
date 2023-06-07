module.exports = {
	app(config){
		return `
			<html>
			<head>
				<title>The Last Standing Monster</title>
				<meta name=viewport content=width=device-width,initial-scale=1>
				<style>
					@font-face{
						font-family:'gumdrop',
						src:url('/file?fn=gm.otf');
					}
					body{
						background:black;
						font-family:math;
						overflow:hidden;
					}
					canvas{
						background:#00cc00;
					}
				</style>
			</head>
			<body>
				<content
				style="
					display:none;
					position:relative;
				"
				>
					<div id=ui
					style="
						position:absolute;
						width:90%;
						gap:10px;
						padding:0 5%;
						display:flex;
						align-items:center;
						height:10%;
					"
					>
						<div
						style="
							height:32px;
							width:100%;
							display:flex;
							justify-content:flex-start;
							align-items:center;
							border:5px solid white;
							border-radius:20px 0 0 20px;
							background:black;
						"
						>
							<div
							style="
								background:#0055d4;
								width:100%;
								height:30px;
								border-radius:20px 0 0 20px;
							"
							id=lefthealthbar
							>
								
							</div>
						</div>
						<div
						style="
							height:32px;
							width:100%;
							display:flex;
							justify-content:flex-end;
							align-items:center;
							border:5px solid white;
							border-radius:0 20px 20px 0;
							background:black;
						"
						>
							<div
							style="
								background:red;
								width:100%;
								height:30px;
								border-radius:0 20px 20px 0;
							"
							id=righthealthbar
							>
								
							</div>
						</div>
					</div>
					<div
					style="
						width:95%;
						padding:0 2.5%;
						position:absolute;
						display:flex;
						justify-content:space-between;
						align-items:center;
					"
					>
						<div
							style="
								width:64px;
								height:64px;
								background:white;
								border-radius:50%;
								display:flex;
								align-items:center;
								justify-content:center;
								gap:5px;
								font-size:24px;
								font-weight:bold;
								box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
							"
						>
							<img src='/file?fn=bluemonster.png'
							style="
								width:90%;
								height:90%;
								padding:5%;
								border-radius:50%;
								object-fit:cover;
							"
							></img>
						</div>
						<div
							style="
								width:64px;
								height:64px;
								background:white;
								border-radius:50%;
								cursor:pointer;
								display:flex;
								align-items:center;
								justify-content:center;
								gap:5px;
								box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
							"
						>
							<div id=played
							style="
								width:100%;
								display:flex;
								align-items:center;
								gap:5px;
								justify-content:center;
							"
							>
								<div
								style="
									width:8px;
									height:32px;
									background:black;
									border-radius:20px;
								"
								></div>
								<div
								style="
									width:8px;
									height:32px;
									background:black;
									border-radius:20px;
								"
								></div>
							</div>
							
							<div id=paused
							style="
								display:none;
								align-items:center;
								justify-content:center;
								font-size:32px;
								font-weight:bolder;
							"
							>
								>	
							</div>
						</div>
						<div
							style="
								width:64px;
								height:64px;
								background:white;
								border-radius:50%;
								display:flex;
								align-items:center;
								justify-content:center;
								gap:5px;
								font-size:24px;
								font-weight:bold;
								box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
							"
						>
							<img src='/file?fn=bluemonster.png'
							style="
								width:90%;
								height:90%;
								padding:5%;
								border-radius:50%;
								object-fit:cover;
							"
							>
						</div>
					</div>
				</content>
				<div
				id=loading
				style="
					position:absolute;
					background:black;
					width:100%;
					height:100%;
					top:0;
					left:0;
					display:flex;
					align-items:center;
					justify-content:center;
					flex-direction:column;
					font-family:cursive;
					font-size:12px;
				"
				>
					<div
					style="
						display:flex;
						align-items:center;
						justify-content:center;
						flex-direction:column;
					"
					>
						<div
						style="color:white;font-weight:bold;
							width:100%;
							text-align:center;
						"
						>
							<span>InfinityDreams Studios Present</span>
						</div>
						<img src=/file?fn=loadingscreen.gif
						style="
							width:200px;
							height:200px;
							object-fit:cover;
							border-radius:30%;
							margin-top:5px;
							box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
						"
						>
						<div
						style="color:white;font-weight:bold;
							margin-top:5px;
							width:100%;
							text-align:center;
						"
						>
							<span>Powered By BananaConsole 2023.</span>
						</div>
					</div>
				</div>
				<script src=/scripts?fn=infinity></script>
				<script src=/scripts?fn=console></script>
				<script src=/scripts?fn=tlsm></script>
				<script src=/scripts?fn=island></script>
				<script src=/scripts?fn=monstera></script>
				<script src=/scripts?fn=redmonster></script>
				<script>CONSOLE.start()</script>
			</body>
		</html>
		`;
	}
}