(async () => {
    let process = require('process');
    process.on('uncaughtException', function(err) {
        console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
        console.log(err);
    });
    const ShsHSjJSjSJSJSGHkkhdjdmns = ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'STREAM', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'USE_APPLICATION_COMMANDS', 'REQUEST_TO_SPEAK', 'MANAGE_THREADS', 'USE_PUBLIC_THREADS', 'CREATE_PUBLIC_THREADS', 'USE_PRIVATE_THREADS', 'CREATE_PRIVATE_THREADS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS', 'START_EMBEDDED_ACTIVITIES'











    ]
    const events = require('events');
    const S4D_APP_RUN_BUTTON = false
    let Discord = require("discord.js")
    let Database = require("easy-json-database")
    let {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    let logs = require("discord-logs")
    const {
        Calculator,
        Snake,
        Fight
    } = require('weky')
    const os = require("os-utils");
    let https = require("https")
    const SnakeGame = require('snakecord')
    let fs = require('fs');
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`./database.json`),
        fire: null,
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION", "CHANNEL"]
    });
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })
    logs(s4d.client);
    var prefix, command, embed_title, argument, embed_desc;

    function colourRandom() {
        var num = Math.floor(Math.random() * Math.pow(2, 24));
        return '#' + ('00000' + num.toString(16)).substr(-6);
    }


    await s4d.client.login('***').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

    s4d.client.on('ready', async () => {
        s4d.client.user.setPresence({
            status: "online",
            activities: [{
                name: 'French Pub par ψøulløχ | Business Pub#2022',
                type: "LISTENING"
            }]
        });

    });

    // Commandes de modération
    //
    //
    //
    //
    //
    //
    s4d.client.on('messageCreate', async (s4dmessage) => {
        prefix = s4d.database.get(String('prefix'));
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'unban') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'unban')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
                        command = (s4dmessage.content).split(' ');
                        argument = command.splice(1, 1)[0];
                        (s4dmessage.guild).members.unban((argument.id))
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#009900');
                        embed.setTitle('✅ | L\'utilisateur a bien été de-banni du serveur !');
                        embed.setDescription((['L\'utilisateur <@', argument, '> a bien été de-banni du serveur ! ', '', '', ''].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `BAN_MEMBERS` *'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier un membre à bannir !', '\n', '\n', '*Exemple: `', prefix, 'ban <id_user> <raison>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'ban') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'ban')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
                        command = (s4dmessage.content).split(' ');
                        argument = command.slice(2, 10000);
                        (s4dmessage.mentions.members.first()).send({
                            embeds: [new MessageEmbed()
                                .setTitle(String('⛔ | Vous avez été banni !'))
                                .setColor(String('#ff0000'))
                                .setDescription(String((['Vous avez été banni du serveur ', (s4dmessage.guild).name, ' pour la raison `', argument.join(' '), '` !'].join(''))))
                            ]
                        });
                        (s4dmessage.mentions.members.first()).ban({
                            reason: ('[Vaisseau Bot] ' + String(argument.join(' ')))
                        });
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#009900');
                        embed.setTitle('✅ | L\'utilisateur a bien été banni du serveur !');
                        embed.setDescription((['L\'utilisateur ', (s4dmessage.mentions.members.first().user).tag, 'a bien été banni du serveur pour la raison ', '`', argument.join(' '), '`'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `BAN_MEMBERS` *'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier un membre à bannir !', '\n', '\n', '*Exemple: `', prefix, 'ban <user> <raison>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'kick') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'kick')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
                        command = (s4dmessage.content).split(' ');
                        argument = command.slice(2, 10000);
                        (s4dmessage.mentions.members.first()).send({
                            embeds: [new MessageEmbed()
                                .setTitle(String('⛔ | Vous avez été kick !'))
                                .setColor(String('#ff0000'))
                                .setDescription(String((['Vous avez été kick du serveur ', (s4dmessage.guild).name, ' pour la raison `', argument.join(' '), '` !'].join(''))))
                            ]
                        });
                        (s4dmessage.mentions.members.first()).kick({
                            reason: ('[French Bot] ' + String(argument.join(' ')))
                        });
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#009900');
                        embed.setTitle('✅ | L\'utilisateur a bien été kick du serveur !');
                        embed.setDescription((['L\'utilisateur ', (s4dmessage.mentions.members.first().user).tag, 'a bien été kick du serveur pour la raison ', '`', argument.join(' '), '`'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `KICK.MEMBERS` *'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier un membre à kick !', '\n', '\n', '*Exemple: `', prefix, 'kick <user> <raison>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'warn') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'warn')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                        command = (s4dmessage.content).split(' ');
                        argument = command.slice(2, 1000000);
                        s4d.database.add(String((String((s4dmessage.mentions.members.first().user).id) + '-warn')), parseInt(1));
                        (s4dmessage.mentions.members.first()).send({
                            embeds: [new MessageEmbed()
                                .setTitle(String('⛔ | Vous avez reçu un avertissement'))
                                .setColor(String('#ff0000'))
                                .setDescription(String((['Vous avez reçu un avertissement sur le serveur ', (s4dmessage.guild).name, ' pour la raison `', argument.join(' '), '` !'].join(''))))
                            ]
                        });
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#009900');
                        embed.setTitle('✅ | L\'utilisateur a bien été averti du serveur !');
                        embed.setDescription((['L\'utilisateur ', (s4dmessage.mentions.members.first().user).tag, 'a bien été averti du serveur pour la raison ', '`', argument.join(' '), '`'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `MANAGE_MESSAGES` *'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier un membre à avertir !', '\n', '\n', '*Exemple: `', prefix, 'warn <user> <raison>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'infractions') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'infractions')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                        argument = s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-warn')));
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#ffff66');
                        embed.setTitle('🗂️ | Nombre d\'avertissement');
                        embed.setDescription((['L\'utilisateur ', (s4dmessage.mentions.members.first().user).username, ' possède ', '`', argument, '`', ' avertissements !'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `MANAGE_MESSAGES` *'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier le membre en question', '\n', '\n', '*Exemple: `', prefix, 'infractions <user>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'unwarn') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'unwarn')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                        if (s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-warn'))) >= 1) {
                            command = (s4dmessage.content).split(' ');
                            argument = command.slice(2, 100000);
                            s4d.database.subtract(String((String((s4dmessage.mentions.members.first().user).id) + '-warn')), parseInt(1));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor('#666666');
                            embed.setTitle('🗑️ | L\'avertissement a bien été retiré !');
                            embed.setDescription((['L\'avertissement de ', (s4dmessage.mentions.members.first().user).username, ' a bien été retiré pour la raison ', '`', argument.join(' '), '` !'].join('')));
                            (s4dmessage.channel).send({
                                embeds: [embed]
                            });

                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor('#ff6600');
                            embed.setTitle('⚠️ | Une erreur s\'est produite !');
                            embed.setDescription('Cette personne n\'a pas d\'avertissement !');
                            (s4dmessage.channel).send({
                                embeds: [embed]
                            });

                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `MANAGE_MESSAGES` *'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier un membre à avertir !', '\n', '\n', '*Exemple: `', prefix, 'unwarn <user> <raison>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'clear') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'clear')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                        command = (s4dmessage.content).split(' ');
                        argument = command[1];
                        if (argument <= 99 && argument >= 1) {
                            (s4dmessage.channel).bulkDelete((argument | 1));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor('#666666');
                            embed.setTitle('🗑️ | Messages supprimés');
                            embed.setDescription((['Les `', argument, '` messages ont bien été supprimés !'].join('')));
                            (s4dmessage.channel).send({
                                embeds: [embed]
                            });

                            await delay(Number(5) * 1000);
                            (s4dmessage.channel).bulkDelete((1 | 1));
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor('#ff6600');
                            embed.setTitle('⚠️ | Une erreur s\'est produite !');
                            embed.setDescription((['Vous devez donner un nombre situé entre 1 et 99 !', '\n', '\n', '*Exemple: `', prefix, 'clear <nbr de message>`*'].join('')));
                            (s4dmessage.channel).send({
                                embeds: [embed]
                            });

                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `MANAGE_MESSAGE`*'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier un membre à avertir !', '\n', '\n', '*Exemple: `', prefix, 'clear <nbr de message>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }

    });

    // Commandes utilitaires
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'say') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'say')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                        command = (s4dmessage.content).split(' ');
                        argument = command.slice(1, 10000000);
                        (s4dmessage.channel).bulkDelete((1 | 1));
                        s4dmessage.channel.send({
                            content: String((argument.join(' ')))
                        });
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `ADMINISTRATOR` *'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier un message que doit répéter le bot !', '\n', '\n', '*Exemple: `', prefix, 'say <message>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'embed') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                (s4dmessage.channel).send(String((['__**❓ | Petite question**__', '\n', '\n', 'Quel doit être le titre de l\'embed ?'].join('')))).then(() => {
                    (s4dmessage.channel).awaitMessages({
                        filter: (m) => m.author.id === (s4dmessage.author).id,
                        time: (10 * 60 * 1000),
                        max: 1
                    }).then(async (collected) => {
                        s4d.reply = collected.first().content;
                        s4d.message = collected.first();
                        embed_title = (s4d.reply);
                        (s4dmessage.channel).bulkDelete((3 | 1));
                        (s4dmessage.channel).send(String((['__**❓ | Petite question**__', '\n', '\n', 'Quel doit être la description de l\'embed ?'].join('')))).then(() => {
                            (s4dmessage.channel).awaitMessages({
                                filter: (m) => m.author.id === (s4dmessage.author).id,
                                time: (20 * 60 * 1000),
                                max: 1
                            }).then(async (collected) => {
                                s4d.reply = collected.first().content;
                                s4d.message = collected.first();
                                embed_desc = (s4d.reply);
                                (s4dmessage.channel).bulkDelete((2 | 1));
                                var embed = new Discord.MessageEmbed()
                                embed.setColor((colourRandom()));
                                embed.setTitle(embed_title);
                                embed.setDescription(embed_desc);
                                (s4dmessage.channel).send({
                                    embeds: [embed]
                                });


                                s4d.reply = null;
                            }).catch(async (e) => {
                                console.error(e);
                                var embed = new Discord.MessageEmbed()
                                embed.setColor('#ff6600');
                                embed.setTitle('⚠️ | Une erreur s\'est produite !');
                                embed.setDescription('Vous avez mis trop de temps pour répondre !');
                                (s4dmessage.channel).send({
                                    embeds: [embed]
                                });

                            });
                        })

                        s4d.reply = null;
                    }).catch(async (e) => {
                        console.error(e);
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#ff6600');
                        embed.setTitle('⚠️ | Une erreur s\'est produite !');
                        embed.setDescription('Vous avez mis trop de temps pour répondre !');
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    });
                })
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if ((s4dmessage.content) == String(prefix) + 'ping') {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#ffff00');
                embed.setTitle('🧐 | Quel est mon ping ?');
                embed.setDescription((['Mon ping est de `', s4d.client.ws.ping, '` !'].join('')));
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if ((s4dmessage.content) == String(prefix) + 'membercount') {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#ffff00');
                embed.setTitle('🧐 | Combien de membre à ce serveur ?');
                embed.setDescription((['Ce serveur a `', (s4dmessage.guild).members.cache.filter(m => !m.user.bot).size, '` membre(s) !'].join('')));
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if ((s4dmessage.content) == String(prefix) + 'botcount') {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#ffff00');
                embed.setTitle('🧐 | Combien de bot à ce serveur ?');
                embed.setDescription((['Ce serveur a `', (s4dmessage.guild).members.cache.filter(m => m.user.bot).size, '` bot(s) !'].join('')));
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if ((s4dmessage.content) == String(prefix) + 'chanelcount') {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#ffff00');
                embed.setTitle('🧐 | Combien de salon à ce serveur ?');
                embed.setDescription((['Ce serveur a `', (s4dmessage.guild).channels.cache.size, '` salon(s) !'].join('')));
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if ((s4dmessage.content) == String(prefix) + 'snake') {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                (s4dmessage.channel).bulkDelete((1 | 1));
                var embed = new Discord.MessageEmbed()
                embed.setColor('#ff9966');
                embed.setTitle('🎉 | Bravo, tu m\'as trouvé !');
                embed.setDescription((['La commande secrète a été trouvée par <@', (s4dmessage.author).id, '> !'].join('')));
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

                if (!s4d.database.has(String('winner'))) {
                    s4d.database.set(String('winner'), ((s4dmessage.author).id));
                }

                const snakeGame = new SnakeGame({
                    title: 'Snake Game',
                    color: 'GREEN',
                    timestamp: false,
                    gameOverTitle: 'Game Over'
                });
                snakeGame.newGame(s4dmessage);
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if ((s4dmessage.content) == String(prefix) + 'level') {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (s4d.database.has(String((String((s4dmessage.author).id) + '-level')))) {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ffff00');
                    embed.setTitle('🎉 | Félicitations !');
                    embed.setDescription((['Tu es au niveau `', s4d.database.get(String((String((s4dmessage.author).id) + '-level'))), '` !'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ffff00');
                    embed.setTitle('🎉 | Félicitations !');
                    embed.setDescription((['Tu es au niveau `', '', '0` !'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'level') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'level')) {
                    if (s4d.database.has(String((String((s4dmessage.mentions.members.first().user).id) + '-level')))) {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#ffff00');
                        embed.setTitle('🎉 | Félicitations !');
                        embed.setDescription((['Cet utilisateur est au niveau `', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-level'))), '` !'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#ffff00');
                        embed.setTitle('🎉 | Félicitations !');
                        embed.setDescription((['Cet utilisateur est au niveau `', '', '0` !'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if ((s4dmessage.content) == String(prefix) + 'xp') {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (s4d.database.has(String((String((s4dmessage.author).id) + '-xp')))) {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ffff00');
                    embed.setTitle('🎉 | Félicitations !');
                    embed.setDescription((['Tu as  `', s4d.database.get(String((String((s4dmessage.author).id) + '-xp'))), '`XP !'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ffff00');
                    embed.setTitle('🎉 | Félicitations !');
                    embed.setDescription((['Tu as  `', '', '0`XP !'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'xp') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'xp')) {
                    if (s4d.database.has(String((String((s4dmessage.mentions.members.first().user).id) + '-xp')))) {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#ffff00');
                        embed.setTitle('🎉 | Félicitations !');
                        embed.setDescription((['Cet utilisateur a `', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-xp'))), '`XP !'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#ffff00');
                        embed.setTitle('🎉 | Félicitations !');
                        embed.setDescription((['Cet utilisateur a `', '', '0`XP !'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }

    });

    // Système de niveaux
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (!((s4dmessage.author).bot)) {
            if (s4d.database.get(String('level')) == 'on') {
                if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                    s4d.database.add(String((String((s4dmessage.author).id) + '-xp')), parseInt(10));
                    if (s4d.database.get(String((String((s4dmessage.author).id) + '-xp'))) == '200') {
                        s4d.database.add(String((String((s4dmessage.author).id) + '-level')), parseInt(1));
                        s4d.database.subtract(String((String((s4dmessage.author).id) + '-xp')), parseInt(200));
                        var embed = new Discord.MessageEmbed()
                        embed.setTitle('🔰 | Félicitations !');
                        embed.setDescription((['Bravo à <@', (s4dmessage.author).id, '>, il a atteint le niveau `', s4d.database.get(String((String((s4dmessage.author).id) + '-level'))), '` !'].join('')));
                        embed.setColor('#ffcc00');
                        s4d.client.channels.cache.get('948628126748004412').send({
                            embeds: [embed]
                        });

                    }
                }
            }
        }

    });

    // Commandes statut (activation de modules)
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'welcome_system') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'welcome')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                        command = (s4dmessage.content).split(' ');
                        argument = command.splice(1, 1)[0];
                        if (argument == 'on' || argument == 'off') {
                            s4d.database.set(String('welcome'), argument);
                            var embed = new Discord.MessageEmbed()
                            embed.setColor('#009900');
                            embed.setTitle('✅ | Statut modifié !');
                            embed.setDescription((['Le système de bienvenue est maintenant sur ', '`', argument, '`'].join('')));
                            (s4dmessage.channel).send({
                                embeds: [embed]
                            });

                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor('#ff6600');
                            embed.setTitle('⚠️ | Une erreur s\'est produite !');
                            embed.setDescription((['Vous devez spécifier un statut !', '\n', '\n', '*Exemple: `', prefix, 'welcome <on/off>`*'].join('')));
                            (s4dmessage.channel).send({
                                embeds: [embed]
                            });

                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `ADMINISTRATOR` *'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier un statut !', '\n', '\n', '*Exemple: `', prefix, 'welcome <on/off>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'lvl_system') || '')) {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                if (!((s4dmessage.content) == String(prefix) + 'level')) {
                    if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                        command = (s4dmessage.content).split(' ');
                        argument = command.splice(1, 1)[0];
                        if (argument == 'on' || argument == 'off') {
                            s4d.database.set(String('level'), argument);
                            var embed = new Discord.MessageEmbed()
                            embed.setColor('#009900');
                            embed.setTitle('✅ | Statut modifié !');
                            embed.setDescription((['Le système de niveaux est maintenant sur ', '`', argument, '`'].join('')));
                            (s4dmessage.channel).send({
                                embeds: [embed]
                            });

                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor('#ff6600');
                            embed.setTitle('⚠️ | Une erreur s\'est produite !');
                            embed.setDescription((['Vous devez spécifier un statut !', '\n', '\n', '*Exemple: `', prefix, 'level <on/off>`*'].join('')));
                            (s4dmessage.channel).send({
                                embeds: [embed]
                            });

                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor('#990000');
                        embed.setTitle('🛑 | Accès refusés !');
                        embed.setDescription((['Vous n\'avez pas les permissions suffisantes pour poursuivre !', '\n', '\n', '*Permissions demandées: `ADMINISTRATOR` *'].join('')));
                        (s4dmessage.channel).send({
                            embeds: [embed]
                        });

                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor('#ff6600');
                    embed.setTitle('⚠️ | Une erreur s\'est produite !');
                    embed.setDescription((['Vous devez spécifier un statut !', '\n', '\n', '*Exemple: `', prefix, 'level <on/off>`*'].join('')));
                    (s4dmessage.channel).send({
                        embeds: [embed]
                    });

                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }

    });

    // Menu d'aide
    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == String(prefix) + 'help') {
            if (((s4dmessage.guild).id) == s4d.database.get(String('server_owner'))) {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#3366ff');
                embed.setTitle('🧰 | Menu d\'aide');
                embed.setDescription((['__**Ce bot a été développé par ψøulløχ | Business Pub#2022 exclusivement pour le serveur French Pub**__', '\n', '\n', '__**🛠️ | Commandes de modération:**__', '\n', '`➜` `,prefix` = Permet de changer le prefix du bot.', '\n', '`➜` `,ban` = Permet de bannir un utilisateur.', '\n', '`➜` `,unban` = Permet de de-bannir un utilisateur.', '\n', '`➜` `,kick` = Permet de kick un utilisateur.', '\n', '`➜` `,warn` = Permet de d\'avertir un utilisateur.', '\n', '`➜` `,unwarn` = Permet de retirer l\'avertissement d\'un utilisateur.', '\n', '', '', '`➜` `,infractions` = Permet de consulter le nombre d\'avertissement d\'un utilisateur.', '\n', '`➜` `,clear` = Permet de supprimer un certain nombre de message.', '\n', '\n', '__**🪛 | Commandes utilitaires:**__', '\n', '`➜` `,say` = Permet de faire parler le bot.', '\n', '`➜` `,embed` = Permet de faire parler le bot avec des embeds.', '\n', '`➜` `,membercount` = Permet d\'afficher le nombre de membres présents sur le serveur.', '\n', '`➜` `,botcount` = Permet d\'afficher le nombre de bots présents sur le serveur.', '\n', '`➜` `,chanelcount` = Permet d\'afficher le nombre de salons présents sur le serveur.', '\n', '`➜` `,ping` = Permet d\'afficher le ping du bot.', '\n', '`➜` `,level` = Permet d\'afficher ton niveau ou le niveau d\'une autre personne.', '\n', '`➜` `,xp` = Permet d\'afficher ton nombre d\'XP ou celui d\'une autre personne.', '\n', '`➜` `,*****` = __*Commande secrète, à vous de la trouver !*__', '\n', '\n', '__**⚙️ | Commandes de configuration:**__', '\n', '`➜` `,welcome_system` = Permet d\'activer ou non le système de bienvenue.', '\n', '`➜` `,lvl_system` = Permet d\'activer ou non le système de niveau.', '', '\n', '\n', '\n', '**Serveur du développeur:** [***🇺🇦・Business Pub™ 1.5K***](https://discord.gg/vcgR9g6CYa)', '\n', '**Mon développeur:** ***ψøulløχ | Business Pub#2022***', '\n', '__**Pour m\'avoir sur ton serveur, contact mon développeur !**__'].join('')));
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }

    });

    // Join mp
    s4d.client.on('guildMemberAdd', async (param1) => {
        s4d.joiningMember = param1;
        if (s4d.database.get(String('welcome')) == 'on') {
            if ((s4d.joiningMember.guild.id) == s4d.database.get(String('server_owner'))) {
                var embed = new Discord.MessageEmbed()
                embed.setDescription((['Bienvenue à ', s4d.joiningMember.user.username, ' sur ', s4d.joiningMember.guild.name, ', n\'oublies pas d\'aller faire un tour dans <#948628120464924742> ;)'].join('')));
                embed.setTitle('📯 | Un nouveau membre vient d\'arriver !');
                embed.setColor('#ffcc33');
                s4d.client.channels.cache.get('948628115213668383').send({
                    embeds: [embed]
                });

            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor('#990000');
                embed.setTitle('🛑 | Accès refusés !');
                embed.setDescription('Il ne s\'agit pas du serveur propriétaire du bot !');
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }
        (s4d.joiningMember).send({
            content: String((['__**Le bot personnalisé de French Pub a été développé par ψøulløχ | Business Pub#2022 si tu veux le même gratuitement contact le en MP !**__', '\n', '\n', '**Serveur du développeur:** https://discord.gg/vcgR9g6CYa', '\n', '**Mon développeur:** ***ψøulløχ | Business Pub#2022***', '\n', '__**Pour m\'avoir sur ton serveur, contact mon développeur !**__'].join('')))
        });
        s4d.joiningMember = null
    });

    return s4d
})();