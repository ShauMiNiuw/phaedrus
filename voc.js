from pathlib import Path

# Recreate the JS file from the previously extracted source data.
# The lists are kept separate and duplicates between Phaedrus 1 and 2 are removed.

p1 = [
("aliēnus, aliēna, aliēnum","fremd"),("bellum, bellī n","der Krieg"),("bōs, bovis m / f","der Ochse, das Rind"),
("calamitās, calamitātis f","das Unglück, der Schaden"),("cōnspicere, cōnspiciō, cōnspexī","erblicken"),
("contentus, contenta, contentum","zufrieden"),("cum","als (plötzlich), (zu der Zeit) als, (immer) wenn"),
("esse, sum, fuī","sein, sich befinden"),("experīrī, experior, expertus sum","versuchen, ausprobieren, riskieren"),
("ingēns, ingēns, ingēns (Gen. ingentis)","gewaltig, ungeheuer, riesig"),("iniūria, iniūriae f","das Unrecht, die Beleidigung"),
("invidia, invidiae f","der Neid, der Hass"),("lātus, lāta, lātum","breit, weit"),("māior, māior, māius (Gen. māiōris)","größer"),
("modus, modī m","die Art, die Weise; das Maß"),("movēre, moveō, mōvī, mōtum","bewegen, beeindrucken"),
("noster, nostra, nostrum","unser"),("ōs, ōris n","der Mund, das Gesicht"),
("patī, patior, passus sum","leiden, erleiden, ertragen; zulassen"),
("potēns, potēns, potēns (Gen. potentis)","mächtig, einflussreich, stark"),("potius Adv.","eher, lieber"),
("prius Adv.","früher, zuerst"),("quaerere, quaerō, quaesīvī, quaesītum","suchen, untersuchen; erwerben, anstreben; fragen; (ex / dē m. Abl.) (jdn.) fragen"),
("querī, queror, questus sum (m. Akk.)","klagen, sich beklagen (über)"),("quis?","wer?"),
("quondam Adv.","einst, einmal; manchmal"),("rāna","der Frosch"),("repellere, repellō, reppulī, repulsum","zurückstoßen, vertreiben"),
("sēdēs, sēdis f","der Wohnsitz; der Platz, der Sitz"),("similis, similis, simile (m. Gen./Dat.)","ähnlich"),
("statim Adv.","sofort, auf der Stelle"),("sustinēre, sustineō","standhalten; aushalten, ertragen"),
("trīstis, trīstis, trīste","traurig; unfreundlich"),("velle, volō, voluī","wollen"),
("vidēre, videō, vīdī","sehen; darauf achten"),("vītāre, vītō, vītāvī, vītātum","meiden, vermeiden"),
("vōs Nom.","ihr"),("vōx, vōcis f","die Stimme, die Äußerung, der Laut"),("vultus, vultūs m","das Gesicht, der Gesichtsausdruck"),
("āles","der Vogel"),("arbor, arboris f","der Baum"),("bonus, bona, bonum","gut"),
("dum","während, solange, (so lange) bis"),("fābula, fābulae f","die Geschichte, die Erzählung, das Theaterstück"),
("habēre, habeō","haben, halten"),("in Präp. m. Abl.","in, auf, bei (wo?)"),("laudāre, laudō","loben"),
("mōns, montis m","der Berg"),("nōn","nicht"),("ostendere, ostendō, ostendī","zeigen, erklären"),
("placēre, placeō","gefallen"),("quam","als, wie"),("sedēre, sedeō","sitzen"),
("sentīre, sentiō, sēnsī","fühlen, meinen, wahrnehmen"),("sī","wenn, falls"),("tibi Dat. von tū","dir"),
("an","ob (nicht), im indirekten Fragesatz"),("corpus, corporis n","der Körper, der Leichnam"),("cutis, cutis","die Haut"),
("dīcere, dīcō, dīxī","sagen, sprechen"),("et","und, auch"),("iacēre, iaceō, iacuī","liegen"),
("ille, illa, illud (Gen. illīus, Dat. illī)","jener, jene, jenes"),("imitārī","nachahmen"),
("indīgnātus, a, um","empört"),("īnflāre","aufblasen"),("inops","ein Schwacher"),
("intendere (Perf. intendī)","aufblähen"),("interrogāre → rogāre","fragen"),("magnitūdō, magnitūdinis f","die Größe"),
("nātus, nātī m","das Kind"),("negāre, negō, negāvī","leugnen, verneinen, ablehnen"),("nīsus, nīsūs","die Anstrengung"),
("novissimē","zuletzt"),("pellis, is f","die Haut"),("perīre, pereō, periī","umkommen, sterben"),
("prātum, prātī n","die Wiese"),("rogāre, rogō","bitten, fragen"),("rūgōsus, a, um","runzlig"),
("rumpere, rumpō, rūpī, ruptum","platzen"),("rūrsus Adv.","wieder, noch einmal"),("sē Akk. (sēsē = sē)","sich"),
("suus, sua, suum","ihr, sein"),("tācta ~ mōta","im PDF ohne eigene Übersetzung angegeben"),
("tantus, tanta, tantum","so groß, so viel"),("tum Adv.","dann, damals, da"),("validus, a, um","stark"),
("ā / ab Präp. m. Abl.","von, von … her"),("ad Präp. m. Akk.","zu, bei, nach"),
("Aesōpus, Aesōpī m","Äsop (griechischer Fabeldichter; Vorbild für Phädrus)"),
("agere, agō, ēgī, āctum","handeln, tun; treiben; verhandeln"),("bonum, bonī n","das Gut, das Gute"),
("contumēlia","die schmachvolle Behandlung"),("dare, dō, dedī","geben"),("dēgere ~ agere","—"),
("dēspicere (Perf. dēspēxī)","verachten"),("ex / ē Präp. m. Abl.","aus, von … her"),
("exemplum, exemplī n","das Beispiel, das Vorbild"),("genus, generis n","das Geschlecht, die Art, die Abstammung"),
("glōriārī (m. Abl.)","sich rühmen (wegen)"),("grāculus","die Dohle"),("habitus, habitūs m","die Gewohnheit"),
("hic, haec, hoc (Gen. huius, Dat. huic)","dieser, diese, dieses (hier)"),
("incipere, incipiō, coepī (incēpī)","beginnen, anfangen"),("libet","es gefällt"),("maerēns","traurig"),
("male mulcātus","übel zugerichtet"),("nātūra, nātūrae f","die Natur, das Wesen, die Beschaffenheit"),
("nē","dass nicht, damit nicht"),("nec","und nicht, auch nicht, nicht einmal"),("nec … nec","weder … noch"),
("nōbīs Dat. von nōs","uns"),("prōdere, prōdō, prōdidī, prōditum","überliefern, verraten"),
("proprius, a, um","eigen"),("-que","nachgestellt: und"),("quī, quae, quod","welcher, welche, welches; der, die, das"),
("quīdam, quaedam, quiddam subst.","ein gewisser, (irgend)einer; Pl. einige"),
("redīre, redeō, rediī","zurückkehren"),("repulsa","Substantiv zu repellere"),
("trīstis nota","die bittere Beschimpfung"),("tua calamitās","du in deinem Unglück"),
("at","aber, dagegen, jedoch"),("cāseus","der Käse"),("corvus, corvī m","der Rabe"),("decor, decōris","der Schmuck"),
("ē-mittere","herauslassen, ausstoßen"),("etiam","auch, sogar"),("gerere, gerō","tragen, führen, ausführen"),
("mittere, mittō, mīsī, missum","schicken; werfen"),("nitor","der Glanz"),
("nūlla prior āles foret","kein Vogel wäre dir überlegen"),("pinna","die Feder"),
("quantus, quanta, quantum","wie groß, wie viel"),("quī","wie wunderbar"),("tuus, tua, tuum","dein")
]

p2 = [
("canis, canis","der Hund"),("cibus, cibī m","die Nahrung, die Speise, das Essen"),
("condiciō, condiciōnis f","die Bedingung, die Lage; die Umstände"),
("cūstōs, cūstōdis m/f","der Wächter, die Wächterin"),("famēs, famis","der Hunger"),
("gaudēre, gaudeō","sich freuen; mit Abl. sich freuen über etwas"),("lībertās, lībertātis f","die Freiheit"),
("lupus, lupī","der Wolf"),("occurrere, occurrō, occurrī","entgegentreten, begegnen"),
("officium, officiī n","der Dienst, die Pflicht, das Pflichtgefühl"),
("praestāre, praestō, praestitī","mit Akk. zeigen, beweisen; garantieren; mit Dat. (jdn.) übertreffen"),
("silva, silvae f","der Wald"),("sub Präp. m. Abl.","unter, unten an, unten bei (wo?)"),
("tēctum, tēctī n","das Dach, das Haus"),("tuērī, tueor m. Akk.","betrachten; schützen, sorgen für"),
("amīcus, amīcī m","der Freund"),("brevis, brevis, breve","kurz"),("dominus, dominī m","der Herr, der Hausherr"),
("domus, domūs f","das Haus"),("facilis, facilis, facile","leicht, einfach"),("fortis, fortis, forte","mutig, tapfer, stark"),
("labōrāre, labōrō","arbeiten, sich anstrengen"),("loquī, loquor, locūtus sum","reden, sprechen"),
("multus, multa, multum","viel"),("nivēs imbrēsque","Schnee und Regen"),
("resistere, resistō, restitī","Widerstand leisten; stehen bleiben"),("tempus, temporis n","die Zeit, die Umstände"),
("ut Subj. m. Ind.","sobald, sooft"),("ut Subj. m. Konj.","dass, sodass, damit; um … zu"),
("vīta, vītae f","das Leben, die Lebensweise"),("vītam agere","das Leben verbringen"),
("aut","oder"),("deinde Adv.","dann, darauf"),("dulcis, dulcis, dulce","süß, angenehm"),("egō Nom.","ich"),
("facere, faciō, fēcī, factum","machen, tun, handeln; mit doppeltem Akk. machen zu"),
("forte Adv.","zufällig"),("fūr, fūris m/f","der Dieb, die Diebin"),
("īdem, eadem, idem (Gen. eiusdem, Dat. eīdem)","derselbe, dieselbe, dasselbe; der (die, das) gleiche"),
("inquam, 3. Pers. Sg. inquit","sage ich, sagte ich"),("invicem","gegenseitig"),
("līmen, līminis n","der Hauseingang"),("longē Adv.","bei Weitem"),
("maciē cōnfectus","abgemagert"),("nitēre","wohlgenährt aussehen"),("noctū","nachts"),
("pār, pār, pār (Gen. paris)","gleich, ebenbürtig"),("perpāstus","wohlgenährt"),
("posse, possum, potuī","können"),("prōloquī","vortragen"),("quaesō","bitte!"),
("salūtāre","grüßen"),("sīc Adv.","so"),("simpliciter Adv.","schlicht"),("unde Adv.","woher"),
("asper, aspera, asperum","rau"),("ergō Adv.","also, deshalb"),("mēcum (~ cum mē)","mit mir"),
("mihi Dat. von egō","mir"),("nunc Adv.","jetzt, nun"),
("ōtiōsum largō satiārī cibō","in Ruhe von reichlicher Speise satt werden"),
("parātus, parāta, parātum (ad m. Akk.)","bereit, entschlossen (zu / für)"),
("trahere, trahō, trāxī, tractum","ziehen, schleppen"),("venīre, veniō, vēnī","kommen"),
("vērō Adv.","in der Tat, wirklich; aber"),("vīvere, vīvō","leben")
]

# Remove duplicates across sections using normalized Latin headword.
seen = set()
def unique(items):
    out=[]
    for lat,de in items:
        key=lat.lower().strip()
        if key not in seen:
            seen.add(key); out.append((lat,de))
    return out

p1u = unique(p1)
p2u = unique(p2)

def esc(s):
    return s.replace("\\","\\\\").replace('"','\\"').replace("\n","\\n")

def section(name, items):
    return f"""const {name} = [
{chr(10).join(f'  {{ latin: "{esc(a)}", deutsch: "{esc(b)}" }},' for a,b in items)}
];"""

content = """// Phaedrus-Vokabeln
// Grundlage: bereitgestelltes PDF, Anhang "Vokabeln"
// Dopplungen zwischen Phaedrus 1 und 2 wurden entfernt.
// Vokabeln aus Phaedrus 1 stehen zuerst, Phaedrus 2 beginnt separat.

""" + section("phaedrus1", p1u) + "\n\n" + section("phaedrus2", p2u) + """

export { phaedrus1, phaedrus2 };
"""

out = Path("/mnt/data/phaedrus_vokabeln_neu.js")
out.write_text(content, encoding="utf-8")

print(f"Datei erstellt: {out}")
print(f"Phaedrus 1: {len(p1u)}")
print(f"Phaedrus 2: {len(p2u)}")
print(f"Gesamt: {len(p1u)+len(p2u)}")
