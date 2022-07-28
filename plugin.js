// export style
export function onLoad() {



function mcParser(a) {
    //a.elem = document.querySelector('[aria-labelledby="'+ a["aria-labelledby"] +'"]')
    let e = a.childrenMessageContent.props
if (e.message.channel_id == "947615847235592212") {
    a.compact = a.childrenHeader.props.compact = true
    a.className = a.className.replace("cozyMessage-1DWF9U","compact-2Nkcau").replace("groupStart-3Mlgv1", "-groupStart-3Mlgv1")
    console.log(a)
}
if (e.message.channel_id == "947615847235592212" && e.message.author.discriminator == "0000") {
    if (typeof a.childrenHeader.props.author == "object") a.childrenHeader.props.author.colorString = "#9b59b5"
    a.compact = a.childrenHeader.props.compact = true
    a.className = a.className.replace("cozyMessage-1DWF9U","compact-2Nkcau").replace("groupStart-3Mlgv1", "-groupStart-3Mlgv1")
    e.message.bot = e.message.author.bot = false
    //console.log(e)
}
else if (e.message.channel_id == "947615847235592212" && e.message.author.id =="802357456670949427"){
    e.message.bot = e.message.author.bot = false
    a.compact = a.childrenHeader.props.compact = false
    a.className = a.className.replace("compact-2Nkcau","cozyMessage-1DWF9U").replace("-groupStart-3Mlgv1", "groupStart-3Mlgv1")
    let embed = e.message.embeds[0]
    if (typeof embed.author == "object") embed.author.iconURL = embed.author.iconURL.replace("https://minotar.net/cube/","https://minotar.net/helm/user/")  
    //console.log(embed)
}
}

const mcPatcher = cumcord.patcher.findAndPatch(
    () => cumcord.modules.webpack.findByDisplayName("Message", false),
    (header) => cumcord.patcher.before("default", header, (args) => {mcParser(args[0])})
); 
}
export function onUnload() {
    let confirmed = await cumcord.ui.modals.showConfirmationModal({
        header: "Are you sure?",
        content: "This will reload your discord!",
        confirmText: "Reload",
        type: "danger"
      });
      if(confirmed){location.href = location.href}
}
